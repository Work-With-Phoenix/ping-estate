import * as React from 'react'
import { Link } from 'gatsby'


const Mobilenav = () => {
    return(
        <div className={"w-full xl:hidden"}>
        <div className={"py-3 px-6 bg-white w-full shadow flex items-center justify-between"}>
             {/*logo  */}
             <div className={"-ml-3"}>
                    <Link to={"#"} className={"text-xl font-semibold text-stone-800"}>ping.Estate</Link>
                </div>
                {/* menu */}
                <div>
                    <button type={"button"} className={""}>
                    <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>

                   
                </div>
        </div>
        </div>
    )
}


export default Mobilenav