import * as React from 'react'
import {Link} from "gatsby";

const listings = [
    {
        name:'Vibe apartments in downtown',
        price: '56,000',
        imageUrl:
            'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        rooms:3,
        area: '3,945',

    },
    {
        name:'Colorful  studio apartment',
        price: '6,000',
        imageUrl:
            'https://images.unsplash.com/photo-1588331494563-8ff8b1fcacfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFwYXJ0bWVudHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        rooms:0,
        area: '3,945',

    },
    {
        name:'Beautiful studio apartment',
        price: '10,000',
        imageUrl:
            'https://images.unsplash.com/photo-1648160669312-58761ce475f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxhcGFydG1lbnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        rooms:1,
        area: '3,945',

    },

]




const Listingsection = () => {
    return(
        <div className={"xl:w-9/12 mx-auto px-6 xl:px-0"}>
            <div className={"pt-32"}>
            {/*    heading*/}
            <div className={"flex xl:flex-row flex-col xl:justify-between xl:items-center"}>

            {/*   info*/}
            <div className={"xl:w-1/2 flex flex-col space-y-2"}>
                <h1 className={"xl:text-xl font-semibold"}>Recently added properties </h1>
                <p className={"text-sm  text-stone-500 "}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
            </div>
                <div className={"xl:py-0 py-6"}>
                    <Link to={"#"} className={"bg-orange-400 text-white py-3 px-6 rounded-full text-sm capitalize hover:bg-orange-500"}>view all</Link>
                </div>

            </div>

            {/*    list grid*/}
            <div className={"xl:grid xl:grid-cols-3 xl:gap-x-8 flex flex-col space-y-6 xl:space-y-0 xl:py-14 py-8"}>

            {/*    listings*/}
                {listings.map((listing) => (
                    <Link to={"#"} className={"hover:shadow-md transition duration-500"}>
                       {/* head*/}
                        <div className="aspect-w-3 aspect-h-2">
                            <img className="object-cover" src={listing.imageUrl} alt="listing" />
                        </div>
                    {/*    body*/}
                    <div className={"py-4 flex flex-col space-y-2 px-4 "}>
                        {/*heading*/}
                        <h2 key={listing.name} className={"text-lg font-medium capitalize"}>{listing.name}</h2>
                    {/*  price  */}
                    <h1 key={listing.price} className={"text-xl text-orange-500 font-medium"}>${listing.price}</h1>
                    {/*    desc*/}
                    <div className={"text-xs text-stone-400 py-2"}>
                    {/*    rooms*/}
                    <span key={listing.rooms} className={"border-r pr-2 border-stone-300"}>{listing.rooms} BD</span>
                        {/*    area*/}
                        <span key={listing.area} className={"px-2 "}>{listing.area} a</span>

                    </div>
                    </div>
                    </Link>
                ))}


            </div>
            </div>

        </div>
    )
}

export default Listingsection