import { PageHeader } from "@/components/page-header"
import { Shield, FileText, Users } from "lucide-react"

export default function SafetyPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader
          title="Safety and Conduct"
          description="Creating a safe and respectful environment for all dancers"
        />

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-4 mb-4">
                <Shield size={32} className="text-purple-600 dark:text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Our Commitment to Safety</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Brazilian Zouk involves close contact. We ask for everyone's mutual respect and consent. The Austin
              Brazilian Zouk Safety Committee (ABZSC) has a code of conduct and policies to ensure a safe environment
              for all.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <FileText className="text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">ABZSC Policy and Procedures</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Please read our safety guidelines when you get the chance, and reach out to the safety committee if
                    you have questions or concerns.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1v00YHfMNSwHtj46aQbI2EQCApq8edF4PivpQ2zQYn8A"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Policy
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
              <div className="flex items-start">
                <Users className="text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Contact the Safety Committee</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    If you have any concerns or questions about safety in our community, please don't hesitate to reach
                    out to our safety committee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
