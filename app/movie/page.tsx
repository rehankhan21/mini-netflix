'use client'

import Banner from '@/components/Banner/Banner'
import MovieTileGrid from '@/components/MovieTileGrid/MovieTileGrid'

export default function Home() {
  return (
    <>
      <Banner title='Featured Movies' />
      <MovieTileGrid />
    </>
  )
}
