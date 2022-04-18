import * as React from 'react'



const ServiceSection = () =>{
    return(
        <div className={"xl:w-9/12 mx-auto px-6 xl:px-0"}>
       <div className={"py-32"}>
        {/* heading */}
        <div className={"flex flex-col space-y-2 items-center"}>
            <h1 className={"text-2xl font-medium xl:w-4/12 text-center"}>Choose the best type of services</h1>
            <p className={"xl:w-10/12 text-sm text-stone-500 xl:text-stone-400  tracking-wide text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
        </div>
       </div>
       {/* cards */}
       <div className={"xl:grid xl:grid-cols-3 xl:gap-6 flex flex-col space-y-6"}>
           {/* card 1 */}
           <div className={"bg-orange-400"}>
            {/* head */}
            <div>
                head
            </div>
            {/* body */}
            <div>
                body
            </div>
           </div>

       </div>
        </div>
    )
}

export default ServiceSection