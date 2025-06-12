interface DefinitionCardProps {
  title: string
  description: string
}

export function DefinitionCard({ title, description }: DefinitionCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
