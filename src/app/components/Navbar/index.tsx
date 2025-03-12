import Image from "next/image";

const Navbar = () => {
    return <div className="bg-white flex justify-between items-center px-standardPadding py-2 bg-white">
        <div className="left-side flex items-center">
            <div className="logo">
                <Image src="/assets/logo.svg" alt="Profile" width={40} height={40} />
            </div>
            <div className="logoTitle mx-3 text-foreground font-bold text-[16px]">Find Jobs</div>
            <ul className="flex space-x-4 text-textClr">
                <li>Top Companies</li>
                <li>Job Tracker</li>
                <li>My Calendar</li>
                <li>Documents</li>
                <li>Messages</li>
                <li>Notifications</li>
            </ul>
        </div>
        <div className="right-side flex items-center">
            <div className="flex space-x-2 p-3 rounded-lg mx-2 bg-[#F6F9FF]">
                <Image src="/assets/search.svg" alt="search" width={15} height={15} />
                <input type="text" placeholder="Search" className="bg-[#F6F9FF]" />
            </div>
            <button className="bg-foreground text-primary p-2 rounded-lg">Resume Builder</button>
            <div className="w-10 h-10 rounded-full overflow-hidden mx-2">
                <Image
                    src="/assets/profile.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    </div>
}

export default Navbar;