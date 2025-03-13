import React from "react";
import ProfileCard from "../ProfileCard";
import Dashboard from "../Dashboard";

// Home component serves as the main container for the ProfileCard and Dashboard components
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row bg-background py-5 px-4 sm:px-standardPadding space-y-3 sm:space-y-3 md:space-x-4">
      <ProfileCard />
      <Dashboard />
    </div>
  );
};

export default Home;
