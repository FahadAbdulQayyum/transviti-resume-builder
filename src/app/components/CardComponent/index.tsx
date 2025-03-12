import React from 'react'

const CardComponent = () => {
    const jobs = [
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
        {title: "UI/UX Designer", logo: "wow", platform: "Teams", location: "Seattle, USA (Remote)", day: 1, applicants: 22},
    ]
  return (
    <div className='grid grid-cols-5 gap-4 '>
{jobs.map(v=><div className='bg-white p-4 rounded-lg shadow-sm'>
<span>
    <h1 className='font-bold font-neueHaas text-xs'>Promoted</h1>
    <h1 className='font-neueHaas '>{v.title}</h1>
    <small>{v.platform}</small>
    <div>
        <button className='bg-foreground text-primary p-2 rounded-lg font-neueHaas text-xs'>Apply Now</button>
    </div>
</span>
</div>)}        
    </div>
  )
}

export default CardComponent