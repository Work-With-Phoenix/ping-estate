import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Link } from 'gatsby'




const Banner = () => {
    const handleClick = {handleClick}
    return(
        <div className={"w-full xl:grid xl:grid-cols-2 xl:overflow-hidden "} id={"banner"}>
            {/* content */}
            <div className={"xl:bg-white flex flex-col justify-between "}>
                
                    <div className={"px-2 text-center xl:text-left flex flex-col space-y-3 xl:mt-32 xl:px-24 ml-2 py-10 xl:py-0 items-center xl:items-end"}>
                    <h1 className={"font-medium xl:text-4xl text-2xl xl:w-7/12 capitalize"}>find your perfect home</h1>
                   
                    <p className={"xl:w-10/12 text-sm text-stone-500 xl:text-stone-400  tracking-wide"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  
                    <div className={"pt-10"}>
                        <Link to={"#"} className={"py-4 text-sm px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white capitalize text-medium"} >get started</Link>
                    </div>
                    </div>
               
                 <div className={"hidden xl:flex flex-row space-x-6 w-52 h-44 bg-blue-200 ml-20"}>
                        <div className={"  bg-orange-200"}>
                        <StaticImage src={"../../../images/thumbnails/thumbnail4.jpg"} alt={"ping.Estate"} className={" w-52 h44"} place-holder={"blurred"} />
                        </div>
                        <div className={" bg-orange-200"}>
                        <StaticImage src={"../../../images/thumbnails/thumbnail3.jpg"} alt={"ping.Estate"} className={"w-52 h-44"} place-holder={"blurred"} />
                        </div>
                        <div className={" bg-orange-200"}>
                        <StaticImage src={"../../../images/thumbnails/thumbnail2.jpg"} alt={"ping.Estate"} className={"z-50  w-52 h-44"} place-holder={"blurred"} />
                        </div>
                    </div>


               
            </div>
            {/* image */}
            <div className={"w-full hidden xl:flex bg-orange-50"} id={"bannerImg"}>
               <StaticImage src={"../../../images/thumbnails/thumbnail.jpg"} alt={"ping.Estate"} className={"w-full h-full z-0"} />
            </div>
        
        </div>
    )
}

export default Banner