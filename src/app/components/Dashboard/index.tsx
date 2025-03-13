import React from 'react'
import SearchComponent from '../SearchComponent'
import Category from '../Category'
import CardComponent from '../CardComponent'

// Dashboard component displays the main dashboard with job listings and search functionality
const Dashboard = () => {
  const data = [
    {title: "UI/UX Designer", logo: "/assets/teams.svg", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
    {title: "UI/UX Designer", logo: "/assets/teams.svg", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
    {title: "UI/UX Designer", logo: "/assets/teams.svg", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
    {title: "UI/UX Designer", logo: "/assets/teams.svg", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
    {title: "UI/UX Designer", logo: "/assets/teams.svg", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
]

  return (
    <div className='w-full space-y-4'>
        <div className='leading-5'>
            <h1 className='text-[22px] font-bold font-neueHaas'>Find your Dream Job, <span className='text-foreground'>Albert!</span></h1>
            <small className='text-textClr2'>Explore the latest job openings and apply for the best opportunities available today!</small>
        </div>
        <SearchComponent />
        <Category />
        <CardComponent 
          jobs = {data}
        title={"Featured Jobs"}
        />
        <CardComponent 
          jobs = {data}
        title={"Recommended Jobs"}
        />
    </div>
  )
}

export default Dashboard