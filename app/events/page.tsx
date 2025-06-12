import { PageHeader } from "@/components/page-header"
import { EventCard } from "@/components/event-card"

export default function EventsPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader
          title="Weekly and One-Time Events"
          description="Find all the Zouk and Lambada events happening in Austin"
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
            Weekly Recurring Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Wednesdays at Inspired Movement"
              address="4201 S Congress Ave Suite 108, Austin, TX 78745"
              date="Wednesday 8:45pm"
              type="Lesson and Social"
            />

            <EventCard
              title="Fridays at Corazon Latino (Fuego Friday)"
              address="6132 W US Hwy 290 Service Rd, Austin, TX 78735"
              type="Social and sometimes a lesson"
              eventLink="https://www.instagram.com/fuego_friday_austin/"
            />

            <EventCard
              title="Austin Zouk & Lambada Tropical Party"
              address="Balance Dance Studio - Studio 2, 4544 S Lamar Blvd, Bldg 200 & 300, Austin, TX 78745"
              date="Monthly on Saturdays"
              time="8:00pm - 12:00am"
              type="Social"
              additionalInfo="Music by DJ Nasty Nhat + DJ G. Early Weekend Social with 4 hours of dancing, refreshments, and Lambada Power Hour. $10 before Thursday, $15 after."
              eventLink="https://partiful.com/e/gVSaAhMCuwp9BoQWUsEy"
              imageUrl="/tropical-dance-party.png"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
            One-Time Events and Series
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <EventCard
              title="Lambada with Leticia"
              address="Rhythm House ATX 4622 S Lamar Blvd, Austin, TX 78745"
              type="Class"
              date="Tuesdays and Wednesdays 8:30PM - 10:30PM"
              eventLink="https://www.facebook.com/events/1633212387373414/1633212407373412/"
            />

            <EventCard
              title="Lambada Social"
              address="Rhythm House ATX 4622 S Lamar Blvd, Austin, TX 78745"
              date="Beginning Wednesdays 10:30PM"
              type="Social"
              additionalInfo="Details coming soon"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
