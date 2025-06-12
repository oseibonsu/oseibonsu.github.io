import { Calendar, MapPin } from "lucide-react"

interface FestivalCardProps {
  name: string
  location: string
  date: string
  isUpcoming?: boolean
}

export function FestivalCard({ name, location, date, isUpcoming = false }: FestivalCardProps) {
  return (
    <div
      className={`
      bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden 
      hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
      ${isUpcoming ? "border-l-4 border-purple-500" : ""}
    `}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{name}</h3>

        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <div className="flex items-start">
            <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
            <span>{location}</span>
          </div>

          <div className="flex items-start">
            <Calendar size={18} className="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
            <span>{date}</span>
          </div>

          {isUpcoming && (
            <div className="pt-2">
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full">
                Upcoming
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
