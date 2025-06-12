import { PageHeader } from "@/components/page-header"
import { FestivalCard } from "@/components/festival-card"

export default function FestivalsPage() {
  const currentMonth = new Date().getMonth() + 1 // 1-12

  // Function to determine if a festival is upcoming (within next 3 months)
  const isUpcoming = (month: number) => {
    const monthsAhead = month - currentMonth
    return monthsAhead >= 0 && monthsAhead <= 3
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader
          title="Zouk Festivals and Congresses"
          description="Plan your dance travels with these upcoming events"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FestivalCard
            name="Interfusion Festival"
            location="Arlington, VA"
            date="Jan 9th-13th 2025"
            isUpcoming={isUpcoming(1)}
          />

          <FestivalCard
            name="ZoukMX"
            location="Playa del Carmen, MX"
            date="Feb 21-24th 2025"
            isUpcoming={isUpcoming(2)}
          />

          <FestivalCard name="Zouk Heat" location="Herndon, VA" date="April 3-7th 2025" isUpcoming={isUpcoming(4)} />

          <FestivalCard
            name="Miami Beach Zouk Congress"
            location="Miami, FL"
            date="April 24-28th 2025"
            isUpcoming={isUpcoming(4)}
          />

          <FestivalCard
            name="Dallas Zouk & Lambada Festival"
            location="Dallas, TX"
            date="July 3-6th 2025"
            isUpcoming={isUpcoming(7)}
          />

          <FestivalCard
            name="Art of Lambada Weekender"
            location="Austin, TX"
            date="July 11-13th 2025"
            isUpcoming={isUpcoming(7)}
          />

          <FestivalCard
            name="Forbiddance Fest"
            location="Austin, TX"
            date="July 31st-Aug 3rd 2025"
            isUpcoming={isUpcoming(7)}
          />

          <FestivalCard name="Divergence" location="Austin, TX" date="Sept 26th-28th 2025" isUpcoming={isUpcoming(9)} />

          <FestivalCard
            name="Zouk Conexao"
            location="Atlanta, GA"
            date="Oct 24th-27th 2025"
            isUpcoming={isUpcoming(10)}
          />

          <FestivalCard
            name="Zouk Elevation"
            location="Denver, CO"
            date="Dec 5th-7th 2025"
            isUpcoming={isUpcoming(12)}
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://docs.google.com/spreadsheets/d/1h10hXMBmejYJKrV4NWC76ukEU65WfIy5CKiZIIT1xaQ/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            View Zouk and Lambada Events In Europe Calendar
          </a>
        </div>
      </div>
    </main>
  )
}
