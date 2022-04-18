import * as React from 'react'



const ServiceSection = () =>{
    return(
        <div className={"xl:w-9/12 mx-auto px-6 xl:px-0"}>
       <div className={"py-32"}>
        {/* heading */}
        <div className={"flex flex-col space-y-2 items-center"}>
            <h1 className={"text-2xl font-medium xl:w-4/12 xl:text-center"}>Choose the best type of services</h1>
            <p className={"xl:w-5/12 text-sm text-stone-500 xl:text-stone-400  tracking-wide xl:text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
        </div>
       </div>
       {/* cards 1 */}
       <div className={"xl:grid xl:grid-cols-3 xl:gap-x-10 flex flex-col space-y-6 xl:space-y-0 xl:pr-32"}>
           {/* card 1 */}
           <div className={"bg-orange-400 px-6 py-8 text-white shadow"}>
            {/* head */}
            <div className={"pt-8"}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                
            </div>
            {/* body */}
            <div className={"pb-10"}>
                <h2 className={"py-2 text-lg capitalize font-semibold"}>exterior design</h2>
                <p className={" text-xs  tracking-wide "}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
           </div>
            {/* card 2 */}
            <div className={" px-6 py-8  shadow"}>
            {/* head */}
            <div className={"pt-8"}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                
            </div>
            {/* body */}
            <div className={"pb-10"}>
                <h2 className={"py-2 text-lg capitalize font-semibold"}>outside decorations</h2>
                <p className={" text-xs text-stone-500   tracking-wide "}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
           </div>
           {/* card 3 */}
           <div className={" px-6 py-8  shadow"}>
            {/* head */}
            <div className={"pt-8"}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                
            </div>
            {/* body */}
            <div className={"pb-10"}>
                <h2 className={"py-2 text-lg capitalize font-semibold"}>commercial design</h2>
                <p className={" text-xs text-stone-500   tracking-wide "}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
           </div>
           

       </div>
       
        </div>
    )
}

export default ServiceSection