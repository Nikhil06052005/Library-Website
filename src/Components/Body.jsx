import React from "react";

const Body = () => {
  return (
    <div className=' space-y-10 md:gap-10 lg:flex'>
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="./assets/11.jpg" alt="1st" className=" h-64 -rotate-45 md:h-96 md:pb-8 lg:h-[500px] " />
        <img src="./assets/12.jpg" alt="2nd" className="absolute h-64 -rotate-[30deg] md:h-96 md:pb-8 lg:h-[500px]" />
        <img src="./assets/13.jpg" alt="3rd" className="absolute h-64 -rotate-[15deg] md:h-96 md:pb-8 lg:h-[500px]"/>
        <img src="./assets/14.jpg" alt="4th" className="absolute h-64 md:h-96 md:pb-8 lg:h-[500px]"/>
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl lg:text-[5.5rem] font-bold font-playfair leading-tight ">Best Place to study</h1>
        <h1 className="font-lato lg:text-[1.5rem] text-gray-400">Study in Silent is the best thing to getting violent.Libraries are a great place to find educational material that might not be available elsewhere </h1>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
            <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder="Enter email address"/>
            <button className="-rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-500 text-red">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
            <img className='h-7' src="./assets/check.jpg" alt="check"/>
            <p className="font-lato text-gray-400">No spam ,ever . Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
