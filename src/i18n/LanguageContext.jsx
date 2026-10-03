import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supportedLanguages, translateText } from './translations'

const LANGUAGE_KEY = 'drPlantLanguage'
const LanguageContext = createContext(null)
const originalTextNodes = new WeakMap()
const translatedTextNodes = new WeakMap()
const originalAttributes = new WeakMap()
const translatedAttributes = new WeakMap()
const translatableAttributes = ['alt', 'aria-label', 'placeholder', 'title']

function translateTextNode(node, language) {
  const current = node.nodeValue
  const lastTranslated = translatedTextNodes.get(node)
  const original = originalTextNodes.has(node) && current === lastTranslated
    ? originalTextNodes.get(node)
    : current
  originalTextNodes.set(node, original)
  const translated = translateText(original, language)
  translatedTextNodes.set(node, translated)
  if (current !== translated) node.nodeValue = translated
}

function translateElementAttributes(element, language) {
  let elementOriginals = originalAttributes.get(element)
  if (!elementOriginals) {
    elementOriginals = new Map()
    originalAttributes.set(element, elementOriginals)
  }
  let elementTranslations = translatedAttributes.get(element)
  if (!elementTranslations) {
    elementTranslations = new Map()
    translatedAttributes.set(element, elementTranslations)
  }

  for (const attribute of translatableAttributes) {
    if (!element.hasAttribute(attribute)) continue
    const current = element.getAttribute(attribute)
    const lastTranslated = elementTranslations.get(attribute)
    const original = elementOriginals.has(attribute) && current === lastTranslated
      ? elementOriginals.get(attribute)
      : current
    elementOriginals.set(attribute, original)
    const translated = translateText(original, language)
    elementTranslations.set(attribute, translated)
    if (current !== translated) element.setAttribute(attribute, translated)
  }
}

function localizeSubtree(root, language) {
  const nodeFilter = document.defaultView.NodeFilter
  const walker = document.createTreeWalker(root, nodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent || parent.closest('script, style, noscript, textarea, [contenteditable="true"], [data-language-ignore]')) {
        return nodeFilter.FILTER_REJECT
      }
      return node.nodeValue.trim() ? nodeFilter.FILTER_ACCEPT : nodeFilter.FILTER_REJECT
    }
  })

  while (walker.nextNode()) translateTextNode(walker.currentNode, language)
  if (root instanceof Element) {
    translateElementAttributes(root, language)
    root.querySelectorAll('*').forEach((element) => translateElementAttributes(element, language))
  }
}

function localizePage(language) {
  localizeSubtree(document.body, language)
  document.documentElement.lang = language
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY)
    return supportedLanguages.some(({ code }) => code === saved) ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language)
    localizePage(language)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') {
          translateTextNode(mutation.target, language)
        } else if (mutation.type === 'attributes') {
          translateElementAttributes(mutation.target, language)
        } else {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language)
            else if (node.nodeType === Node.ELEMENT_NODE) {
              localizeSubtree(node, language)
            }
          })
        }
      }
    })
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttributes
    })
    return () => observer.disconnect()
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage: (nextLanguage) => {
      if (supportedLanguages.some(({ code }) => code === nextLanguage)) setLanguageState(nextLanguage)
    }
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
