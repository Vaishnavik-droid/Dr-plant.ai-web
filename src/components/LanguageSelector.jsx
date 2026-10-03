import { supportedLanguages } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'

export function LanguageSelector({ className = '' }) {
  const { language, setLanguage } = useLanguage()

  return (
    <label className={`language-selector ${className}`.trim()}>
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        {supportedLanguages.map(({ code, name }) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
    </label>
  )
}
