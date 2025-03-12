import React from 'react'
import SearchComponent from '../SearchComponent'

const Dashboard = () => {
  return (
    <div className='w-full'>
        <div className='leading-5'>
            <h1 className='text-[22px] font-bold font-neueHaas'>Find your Dream Job, <span className='text-foreground'>Albert!</span></h1>
            <small className='text-textClr2'>Explore the latest job openings and apply for the best opportunities available today!</small>
        </div>
        <SearchComponent />
    </div>
  )
}

export default Dashboard