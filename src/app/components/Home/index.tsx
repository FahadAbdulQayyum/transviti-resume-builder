import Image from 'next/image'
import React from 'react'
import ProfileCard from '../ProfileCard'

const Home = () => {
  return (
    <div className='bg-background py-5 px-standardPadding'>
        <ProfileCard/>
        <div className="right-card"></div>
    </div>
  )
}

export default Home