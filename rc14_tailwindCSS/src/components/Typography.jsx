import React from 'react'

const Typography = () => {
    return (
        <div>
            <p className="text-sm">Typography</p>
            <p className="text-base/8">Typography</p>
            <p className="text-lg">Typography</p>
            <p className="text-xl">Typography</p>
            <p className="text-2xl">Typography</p>
            <h1 className="text-3xl">Typography</h1>
            <h2 className="text-4xl">Typography</h2>
            <h3 className="text-[60px]">Typography</h3>
            <h3 className="text-[4rem]">Typography</h3>

            {/* //* Line Clamp */}
            <article>
                <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque voluptatem voluptatum incidunt provident nihil! Voluptatum, asperiores. Cumque in sapiente voluptatibus labore et, reiciendis dolorum eligendi aliquid, non esse dolorem quo itaque a unde earum suscipit dolores perferendis error deleniti ullam. Necessitatibus ipsam quasi tempora modi adipisci corporis ad vitae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque voluptatem voluptatum incidunt provident nihil! Voluptatum, asperiores. Cumque in sapiente voluptatibus labore et, reiciendis dolorum eligendi aliquid, non esse dolorem quo itaque a unde earum suscipit dolores perferendis error deleniti ullam. Necessitatibus ipsam quasi tempora modi adipisci corporis ad vitae!
                </p>
            </article>
            <div className='font-bold'>
                <p className='font-bold'>Hello</p>
            <p className='text-center'>Hello</p>
            <p className='underline'>Hello</p>
            <p className='line-through'>Hello</p>
            <p className='uppercase'>Hello</p>
            <p className='lowercase'>Hello</p>
            <p className='text-red-700'>Hello</p>
            <p className='text-red-950'>Hello</p>
            <p className='text-[#D2E0FB]'>Hello</p>
            <p className='text-[rgb(254,249,217)]'>Hello</p>
            <p className='bg-slate-500'>Hello</p>
            <p className='bg-[#D2E0FB]'>Hello</p>
            </div>
            
        </div>
    )
}

export default Typography