import * as React from 'react'
import { Link } from 'gatsby'



const Webnav = () => {
    return(
        <div className={"w-full hidden xl:flex"}>
            <div className={"w-full py-6 flex flex-row items-center justify-around "}>
                {/*logo  */}
                <div className={""}>
                    <Link to={"#"} className={"text-2xl font-semibold text-stone-800"}>ping.Estate</Link>
                </div>
                <div className={"px-10"}>
                    <nav>
                        <ul className={"flex items-center space-x-12 capitalize text-sm"}>
                            <li><Link to={""} className={""}>home</Link></li>
                            <li><Link to={""} className={""}>buying</Link></li>
                            <li><Link to={""} className={""}>selling</Link></li>
                            <li><Link to={""} className={""}>about</Link></li>
                            <li><Link to={""} className={""}>contact</Link></li>
                        </ul>
                    </nav>
                </div>
                {/* login */}
                <div>
                    <Link to={""} className={"text-sm py-2 bg-white border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white capitalize rounded-full px-6"}>login</Link>
                </div>
           

            </div>
            </div>
    )
}


export default Webnav