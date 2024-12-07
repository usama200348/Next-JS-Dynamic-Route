import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <>
    <div>Homepage</div>
    <Link href={'/About'}>About</Link>
    </>
  )
}

export default Homepage