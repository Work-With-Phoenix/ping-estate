import * as React from 'react'

const testimonails = [
    {
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        imageUrl:
        'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMGFnZW50fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=600',
        
    }
]


const Testimonialsection = () => {
    return(
        <div className={"xl:w-9/12 mx-auto px-6 xl:px-0"}>
            <div className={"xl:pt-32 pt-14"}>
                <div className={"flex xl:flex-row "}>
                {testimonails.map((item)=>(
                    <div className={"flex flex-col xl:flex-row space-y-2 space-x-8 justify-between items-center"}>
                    {/*    description*/}
                    <div className={"xl:w-5/12"}>

                        <p key={item.description} className={"text-sm text-stone-500"}>{item.description}</p>
                    </div>
                    {/*    image*/}
                        <div className="aspect-w-1 aspect-h-2">
                            <img className="object-cover" src={item.imageUrl} alt="listing" />
                        </div>
                    </div>
                ))}
                </div>

            </div>
        </div>
    )
}



export default Testimonialsection