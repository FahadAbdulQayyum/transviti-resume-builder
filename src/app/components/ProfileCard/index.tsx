"use client"

import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="left-card bg-cover bg-white bg-center rounded-lg overflow-hidden shadow-lg relative h-[248px] w-[346px]">
      {/* Background Image */}
      <Image
        src="/assets/card-bg.svg"
        alt="Card Background"
        width={346}
        height={100}
        className="z-0"
      />

      {/* Profile Image */}
      <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="/assets/card-profile.svg"
            alt="Profile Picture"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-80 text-center z-10">
        <h1 className="text-lg font-bold text-gray-800">Albert Flores</h1>
        <p className="text-sm text-gray-600">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </p>
        <small className="text-xs text-gray-500 block mt-1">Clinton, Maryland</small>
      </div>
    </div>
  );
};

export default ProfileCard;