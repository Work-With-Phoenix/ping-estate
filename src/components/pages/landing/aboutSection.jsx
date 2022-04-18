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
                               {/* icon */}
                               <span><svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></span>
                               <h2 className={"text-lg font-semibold pt-2"}>Concept Design</h2>
                               <p className={"py-4 text-sm text-stone-500"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                           </div>
                           <div>
                               {/* icon */}
                               <span><svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></span>
                               <h2 className={"text-lg font-semibold pt-2"}>Design Development</h2>
                               <p className={"py-4 text-sm text-stone-500"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                           </div>
                           <div className={"pt-10"}>
                        <Link to={"#"} className={"py-3 text-sm px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white capitalize text-medium"} >read more</Link>
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