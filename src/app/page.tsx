import React from 'react'
import Home from '@/components/home/home'
import About from '@/components/about/about'
import Work from '@/components/work/work'
import Navbar from '@/components/navbar/navbar'
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