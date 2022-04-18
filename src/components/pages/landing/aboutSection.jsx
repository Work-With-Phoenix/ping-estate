import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Link } from 'gatsby'



const AboutSection = () =>{
    return(
        <div className={"xl:w-10/12 mx-auto px-6 xl:px-0"}>
                    <div className={"xl:grid xl:grid-cols-2 "}>
                        {/* information */}
                        <div className={"xl:px-16"}>
                           {/* heading */}
                           <div>
                               <h1 className={"font-semibold xl:text-xl"}>30 years if experience with custom built home design innovation</h1>
                               <p className={"py-4 text-sm text-stone-500"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                           </div>
                           
                           {/* service */}
                          <div className={"xl:pt-8"}>
                          <div>
                          <div className={"xl:hidden py-4 "}>
                           <StaticImage src={"../../../images/thumbnails/thumbnail2.jpg"} alt={"ping.Estate"}  className={"w-full h-52 "} placeholder={"blurred"} />
                           </div>
                               {/* icon */}
                               <span><svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg></span>
                               <h2 className={"text-lg font-semibold pt-2"}>Concept Design</h2>
                               <p className={"py-4 text-sm text-stone-500"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                           </div>
                           <div>
                           <div className={"xl:hidden py-4 "}>
                           <StaticImage src={"../../../images/thumbnails/thumbnail7.jpg"} alt={"ping.Estate"}  className={"w-full h-52 "} placeholder={"blurred"} />
                           </div>
                               {/* icon */}
                               <span><svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></span>
                               <h2 className={"text-lg font-semibold pt-2"}>Design Development</h2>
                               <p className={"py-4 text-sm text-stone-500"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                           </div>
                           <div className={"pt-10"}>
                        <Link to={"#"} className={"py-3 text-sm px-8 rounded-full bg-orange-400 hover:bg-orange-500 text-white capitalize text-medium"} >read more</Link>
                    </div>
                          </div>
                        </div>
                        {/* images */}
                        <div className={"hidden xl:grid xl:grid-cols-2 "}>
                            <div className={"w-80 h-96 bg-blue-200 border-8 border-white xl:mt-36 ml-6 overflow-hidden"} style={{
                               borderTopRightRadius: '50%',
                               zIndex: '1'
                            }}>
                                <StaticImage src={"../../../images/thumbnails/thumbnail2.jpg"} alt={"ping.Estate"}  className={"w-80 h-96 "} placeholder={"blurred"} />
                            </div>
                            <div className={"h-96 bg-green-200 z-0"} style={{
                               zIndex: '-1' 
                            }}>
                                <StaticImage src={"../../../images/thumbnails/thumbnail7.jpg"} alt={"ping.Estate"}  className={"w-full h-96 "} placeholder={"blurred"} />
                            </div>
                        </div>
                    </div>

        </div>
    )
}


export default AboutSection