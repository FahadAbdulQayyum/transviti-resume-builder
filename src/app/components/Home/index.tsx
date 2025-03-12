import React from 'react'
import ProfileCard from '../ProfileCard'
import Dashboard from '../Dashboard'

const Home = () => {
  return (
    <div className='flex bg-background py-5 px-standardPadding space-x-4'>
        <ProfileCard/>
        <Dashboard />
    </div>
  )
}

export default Home