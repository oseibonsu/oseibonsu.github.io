import { PageHeader } from "@/components/page-header"
import { Lightbulb } from "lucide-react"

export default function TipsPage() {
  const tips = [
    {
      tip: "Introduce yourself to others",
      description: "A simple \"Hi, I'm [Name], I'm new here\" goes a long way.",
    },
    {
      tip: "Ask people to dance",
      description: "Don't be shy to ask someone to dance or practice; it's a great way to improve and make friends.",
    },
    {
      tip: "Stay after class",
      description: "Stay after class for the social time or chat with fellow dancers.",
    },
    {
      tip: "Volunteer at events",
      description: "Volunteering at events is a great way to meet people and get involved.",
    },
    {
      tip: "Mind your hygiene",
      description: "Be mindful of personal hygiene. Dress comfortably and keep breath mints or gum handy.",
    },
    {
      tip: "Be courteous",
      description:
        'Apologize if you bump someone or make a mistake. A quick "Sorry!" helps keep the atmosphere friendly.',
    },
  ]

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader title="Tips and Suggestions" description="Helpful advice for dancers of all levels" />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-2 mr-4">
                      <Lightbulb size={20} className="text-amber-600 dark:text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.tip}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">Remember</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-lg">
              Everyone was a beginner once. Be patient with yourself, enjoy the learning process, and most importantly,
              have fun!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
