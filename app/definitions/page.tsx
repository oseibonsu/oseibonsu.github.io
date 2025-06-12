import { PageHeader } from "@/components/page-header"
import { DefinitionCard } from "@/components/definition-card"

export default function DefinitionsPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader title="Dance Definitions" description="Understanding the terminology of the dance community" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DefinitionCard
            title="Lesson"
            description="A lesson is a structured class where an instructor teaches specific dance techniques and patterns. A lesson is usually taught by an instructor who covers a specific movement, pattern, or technique. People often rotate partners to gain practical experience with many different individuals."
          />

          <DefinitionCard
            title="Social"
            description="A social is an event where dancers come together to practice and enjoy dancing in a relaxed, informal setting. A social is where music is played for open dancing. You can ask others to dance or chat, and it's a great way to meet people in a relaxed environment."
          />

          <DefinitionCard
            title="Festival/Congress"
            description="A festival or congress is a large event that typically spans several days and includes workshops, performances, and social dancing. A festival or congress is a weekend (or multi-day) event featuring lessons, socials, performances, and sometimes competitions. Attendees from various locations gather to learn and socialize."
          />

          <DefinitionCard
            title="Weekender"
            description="A weekender is a smaller event that takes place over a weekend and includes workshops and social dancing. A weekender is a smaller-scale event with a few workshops and socials over a weekend, offering an immersive dance experience without the intensity of a full festival."
          />

          <DefinitionCard
            title="Practica"
            description="A practica is an informal practice session where dancers can work on their skills and receive feedback from peers. A practica is a casual, informal gathering to focus on skill improvement, experimentation, and collaboration. Anybody can host one. It's a great way to practice moves learned in class and get feedback."
          />
        </div>
      </div>
    </main>
  )
}
