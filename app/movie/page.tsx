'use client'

import Banner from "@/components/Banner/Banner"
import MovieTileGrid from "@/components/MovieTileGrid/MovieTileGrid"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner title="Featured Shows" />
      <MovieTileGrid />
    </div>
  )
}
