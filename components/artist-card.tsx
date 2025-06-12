"use client"

import { Instagram } from "lucide-react"
import { InstagramEmbed } from "react-social-media-embed"

interface ArtistCardProps {
  names: string
  instagramHandle: string
  instagramUrl: string
  instagramPostUrl?: string
  imageUrl?: string
  description?: string
}

export function ArtistCard({
  names,
  instagramHandle,
  instagramUrl,
  instagramPostUrl,
  imageUrl,
  description,
}: ArtistCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Header Image - only show if no Instagram embed */}
      {!instagramPostUrl && (
        <div className="relative">
          <img
            src={imageUrl || `/placeholder.svg?height=300&width=400&query=dance artists ${names}`}
            alt={`${names} - Sponsored Artists`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2">{names}</h3>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{names}</h3>

        {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}

        <div className="flex items-center justify-between mb-6">
          <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full">
            Sponsored Artist
          </span>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            <Instagram size={16} className="mr-2" />
            {instagramHandle}
          </a>
        </div>

        {/* Instagram Embed at the bottom */}
        {instagramPostUrl && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 -mx-6 -mb-6">
            <div className="px-6 pb-6">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">Latest from Instagram</h4>
              <div className="w-full flex items-center justify-center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <InstagramEmbed url={instagramPostUrl} width="100%" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fallback for artists without embeds */}
        {!instagramPostUrl && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 -mx-6 -mb-6">
            <div className="px-6 pb-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <Instagram size={32} className="mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Follow {names} on Instagram for their latest performances
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-sm"
                >
                  View on Instagram →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
