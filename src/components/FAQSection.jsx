import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

const faqs = [
  {
    question: 'What is Dr.PlantAI?',
    answer: 'Dr.PlantAI is an AI-powered plant health assistance platform that helps users identify common plant diseases from images and provides relevant treatment and prevention information.'
  },
  {
    question: 'How does plant disease detection work?',
    answer: 'Simply capture or upload a clear image of the affected plant. Dr.PlantAI analyzes the image using its AI-based diagnosis system and provides a predicted disease along with a confidence score.'
  },
  {
    question: 'Can Dr.PlantAI work without an internet connection?',
    answer: 'Yes. Dr.PlantAI follows an offline-first approach for its core diagnosis and locally available plant-health information. Features that depend on external services may require an internet connection.'
  },
  {
    question: 'Can I trust the AI diagnosis?',
    answer: 'The AI provides a prediction based on the uploaded image and displays a confidence score. Low-confidence results should be verified with an agricultural expert before taking treatment decisions.'
  }
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const id = useId()
  const headingId = `${id}-heading`

  return (
    <section className="container section-space faq-section" aria-labelledby={headingId}>
      <SectionHeader
        headingId={headingId}
        title="Frequently Asked Questions"
        description="Find quick answers about Dr.PlantAI and how it helps with plant health."
        align="center"
      />
      <div className="faq-list">
        {faqs.map(({ question, answer }, index) => {
          const isExpanded = expandedIndex === index
          const questionId = `${id}-question-${index}`
          const answerId = `${id}-answer-${index}`

          return (
            <article className={`faq-item${isExpanded ? ' is-open' : ''}`} key={question}>
              <h3 className="faq-question-heading">
                <button
                  className="faq-question"
                  id={questionId}
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={answerId}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <span>{question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              </h3>
              <div
                className={`faq-answer${isExpanded ? ' is-open' : ''}`}
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isExpanded}
              >
                <div className="faq-answer-inner">
                  <p>{answer}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
