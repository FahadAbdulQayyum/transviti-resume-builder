import Image from 'next/image';
import React from 'react';

// Define the type for a single job object
interface Job {
  title: string;
  logo: string;
  platform: string;
  location: string;
  day: number;
  applicants: number;
}

// Define the props for the CardComponent
interface CardComponentProps {
  jobs: Job[]; // Array of job objects
  title: string; // Title of the card section
}

const CardComponent: React.FC<CardComponentProps> = ({ jobs, title }) => {
  return (
    <div className="py-2">
      {/* Header Section */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-neueHaas">{title}</h1>
        <small className="text-foreground font-neueHaas border-b border-foreground">See {title}</small>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-3">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <span className="space-y-1">
              {/* Promoted Label */}
              <h1 className="font-bold font-neueHaas text-xs pb-3 -mt-2">Promoted</h1>

              {/* Job Title and Platform */}
              <span className="flex space-x-3">
                <img src={job.logo} alt="logo" className="w-8 h-8" />
                <span className="flex flex-col">
                  <h1 className="font-neueHaas text-sm">{job.title}</h1>
                  <small>{job.platform}</small>
                </span>
              </span>

              {/* Location */}
              <div className="flex space-x-2 text-textClr">
                <Image src="/assets/locationIcon.svg" alt="location" width={12} height={12} />
                <small>{job.location}</small>
              </div>

              {/* Time and Applicants */}
              <div className="flex space-x-2 text-textClr">
                <Image src="/assets/clockIcon.svg" alt="clock" width={12} height={12} />
                <small>
                  {job.day + " day ago"} | <span className="text-foreground">{job.applicants + " applicants"}</span>
                </small>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between pt-2">
                <button className="bg-foreground text-primary p-2 px-8 rounded-lg font-neueHaas text-xs">
                  Apply Now
                </button>
                <Image src="/assets/saveIcon.svg" alt="save" width={12} height={12} />
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;