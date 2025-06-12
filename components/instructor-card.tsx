interface InstructorCardProps {
  name: string
  specialties: string
  imageUrl?: string
  website?: string
  instagram?: string
  additionalInfo?: string
}

export function InstructorCard({
  name,
  specialties,
  imageUrl,
  website,
  instagram,
  additionalInfo,
}: InstructorCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <img
            src={imageUrl || `/placeholder.svg?height=300&width=300&query=dance instructor portrait ${name}`}
            alt={`${name} - Dance Instructor`}
            className="w-full h-48 sm:h-full object-cover"
          />
        </div>
        <div className="p-6 sm:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{name}</h3>

          <div className="mb-3">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full">
              {specialties}
            </span>
          </div>

          {additionalInfo && <p className="text-gray-600 dark:text-gray-300 mb-4">{additionalInfo}</p>}

          <div className="flex flex-wrap gap-2 mt-4">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Website
              </a>
            )}

            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                {instagram}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
