import React from 'react'
import Home from '@/components/home/home'
import Navbar from '@/components/navbar/navbar'
import Work from '@/components/work/work'
import About from '@/components/about/about'
function Page() {
  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Work/>
    </>
  )
}

export default Page