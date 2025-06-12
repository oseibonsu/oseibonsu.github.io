import { HeroSection } from "@/components/hero-section"
import { CalendarEmbed } from "@/components/calendar-embed"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Info, Shield, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <PageHeader
            title="Welcome to the Austin Zouk & Lambada Community!"
            description="We're thrilled to have you join us! Dancing is a joyful way to connect, make friends, and express yourself."
          />

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Beginners are the best thing to happen to any dance community. The more people who join, the more
              opportunities we have to bring exciting events, learn from each other, and ultimately enjoy dancing
              together. You are not a "bad" dancer; you are a beginner embarking on an exciting journey!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/events" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Events</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Find weekly classes, socials, and special events happening in Austin.
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/festivals" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-pink-100 dark:bg-pink-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-pink-600 dark:text-pink-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Festivals</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Discover upcoming Zouk festivals and congresses in Austin and beyond.
                </p>
                <div className="flex items-center text-pink-600 dark:text-pink-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/definitions" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-violet-100 dark:bg-violet-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Info className="text-violet-600 dark:text-violet-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Definitions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Learn about different types of dance events and terminology.
                </p>
                <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/instructors" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Instructors</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Connect with local instructors offering private lessons.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/artists" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-rose-100 dark:bg-rose-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-rose-600 dark:text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Artists</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Meet the talented artists we sponsor in the Brazilian Zouk and Lambada community.
                </p>
                <div className="flex items-center text-rose-600 dark:text-rose-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/safety" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Safety</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Learn about our community safety guidelines and policies.
                </p>
                <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/tips" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tips</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Get helpful tips for beginners and experienced dancers alike.
                </p>
                <div className="flex items-center text-amber-600 dark:text-amber-400 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <PageHeader title="Austin Zouk Calendar" />
          <div className="max-w-5xl mx-auto">
            <CalendarEmbed />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a complete beginner or an experienced dancer, we welcome you to join our vibrant community.
          </p>
          <Link
            href="/events"
            className="px-8 py-3 bg-white text-purple-700 font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 inline-flex items-center"
          >
            Find Your First Event <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
