import { PageHeader } from "@/components/page-header"
import { HelpCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "I don't know anything. Should I come out and do a social dance?",
      answer: "Everyone starts as a beginner. The more you challenge yourself, the more fun you'll have."
    },
    {
      question: "How do I improve?",
      answer: "By dancing! Attend lessons, socials, practicas, and practice on your own or with a partner."
    },
    {
      question: "What's the best way to make friends?",
      answer: "Simply talk to people and ask them about their dance journey. You can also invite them to practice together."
    },
    {
      question: "When should I start learning head movement?",
      answer: "After your footwork and fundamentals are solid. Head movements build on the basics, so master them first."
    }
  ];

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader 
          title="Frequently Asked Questions" 
          description="Answers to common questions about Zouk and our community"
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2 mr-4 mt-1">
                      <HelpCircle size={20} className="text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {/*Have more questions?*/}
            </h3>
          </div>
        </div>
      </div>
    </main>
  )
}
