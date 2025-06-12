interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className = "" }: PageHeaderProps) {
  return (
    <div className={`mb-10 text-center ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h1>
      {description && <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
