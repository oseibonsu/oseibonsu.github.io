import { PageHeader } from "@/components/page-header"
import { InstructorCard } from "@/components/instructor-card"

export default function InstructorsPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader
          title="Instructors Offering Privates"
          description="Connect with our talented local instructors for personalized lessons"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <InstructorCard name="Alexandra Roberts" specialties="Zouk" />

          <InstructorCard name="Alison Gaxiola" specialties="Zouk/Movement Therapy" />

          <InstructorCard name="Demian Gaxiola" specialties="Zouk" />

          <InstructorCard name="Favian Bustos" specialties="Zouk" />

          <InstructorCard name="Ian Bazilio" specialties="Zouk/Lambada/DJ" />

          <InstructorCard name="Laura Davala" specialties="Zouk/Lambada" />

          <InstructorCard name="Letícia Castro" specialties="Lambada" instagram="@leticiacastrolambada" />

          <InstructorCard name="Nhat & Gigi Ho" specialties="Zouk/Lambada/DJ" />

          <InstructorCard
            name="Rachel Ramalho"
            specialties="Zouk/Lambada/DJ"
          />

          <InstructorCard name="Roberto PM" specialties="Zouk" website="http://robertopm.com" />

          <InstructorCard name="Sabrina Ghelardi" specialties="Zouk/Lambada" instagram="@sabrinathedancer" />
        </div>
      </div>
    </main>
  )
}
