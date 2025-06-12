"use client"

import { PageHeader } from "@/components/page-header"
import { ArtistCard } from "@/components/artist-card"

export default function ArtistsPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <PageHeader
          title="Sponsored Artists"
          description="Meet the talented artists we proudly sponsor in the Brazilian Zouk and Lambada community"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ArtistCard
            names="Luan and Adriana"
            instagramHandle="@luaneadrianaofc"
            instagramUrl="https://www.instagram.com/luaneadrianaofc/"
            instagramPostUrl="https://www.instagram.com/reel/DGWnigpuEeL/"
            description="Captivating performers known for their emotional connection and technical excellence in Brazilian Zouk."
          />

          <ArtistCard
            names="Marck and Melyssa"
            instagramHandle="@marckemelyssa.oficial"
            instagramUrl="https://www.instagram.com/marckemelyssa.oficial/"
            instagramPostUrl="https://www.instagram.com/reel/C6JjJ4TOIbs/"
            description="Innovative artists pushing the boundaries of Brazilian Zouk with their unique style and creativity."
          />

          <ArtistCard
            names="Ariel & Letícia"
            instagramHandle="@arieleticialambada"
            instagramUrl="https://www.instagram.com/arieleticialambada"
            instagramPostUrl="https://www.instagram.com/reel/DKAGA_4OkU4/"
            description="Specialists in Lambada, bringing authentic Brazilian dance culture to audiences around the globe."
          />

          <ArtistCard
            names="Rau & Isa"
            instagramHandle="@raueisa"
            instagramUrl="https://www.instagram.com/raueisa/"
            instagramPostUrl="https://www.instagram.com/reel/CoyFdhcvcNQ/"
            description="Dynamic duo bringing passion and artistry to Brazilian Zouk and Lambada performances worldwide."
          />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Supporting Dance Excellence</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are proud to sponsor these incredible artists who represent the best of Brazilian Zouk and Lambada.
              Their dedication to the art form and their contributions to our community inspire dancers worldwide.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
