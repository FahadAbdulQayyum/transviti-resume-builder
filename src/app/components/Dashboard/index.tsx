"use client";

import React, { useEffect, useState } from "react";
import SearchComponent from "../SearchComponent";
import Category from "../Category";
import CardComponent from "../CardComponent";

// Dashboard component displays the main dashboard with job listings and search functionality
const Dashboard = () => {

  const [dataArray, setDataArray] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data.json");
      const res = await data.json();
      console.log('...data...', res);
      setDataArray(res.data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="leading-5">
        <h1 className="text-[22px] font-bold">
          Find your Dream Job, <span className="text-foreground">Albert!</span>
        </h1>
        <small className="text-textClr2">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </small>
      </div>
      <SearchComponent />
      <Category />
      <CardComponent jobs={dataArray} title={"Featured Jobs"} />
      <CardComponent jobs={dataArray} title={"Recommended Jobs"} />
    </div>
  );
};

export default Dashboard;
