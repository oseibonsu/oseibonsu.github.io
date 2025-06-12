import { Calendar, Clock, MapPin } from "lucide-react"

interface EventCardProps {
  title: string
  address: string
  date?: string
  time?: string
  type: string
  contact?: string
  additionalInfo?: string
  eventLink?: string
  imageUrl?: string
}

export function EventCard({
  title,
  address,
  date,
  time,
  type,
  contact,
  additionalInfo,
  eventLink,
  imageUrl,
}: EventCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} event`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>

        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <div className="flex items-start">
            <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
            <span>{address}</span>
          </div>

          {date && (
            <div className="flex items-start">
              <Calendar size={18} className="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
              <span>{date}</span>
            </div>
          )}

          {time && (
            <div className="flex items-start">
              <Clock size={18} className="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
              <span>{time}</span>
            </div>
          )}

          <div className="pt-2">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full">
              {type}
            </span>
          </div>

          {contact && (
            <div className="pt-1">
              <span className="text-sm">Contact: {contact}</span>
            </div>
          )}

          {additionalInfo && <div className="pt-2 text-sm text-gray-500 dark:text-gray-400">{additionalInfo}</div>}

          {/* Add the event link button if eventLink is provided */}
          {eventLink && (
            <div className="pt-3">
              <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Event Details
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
