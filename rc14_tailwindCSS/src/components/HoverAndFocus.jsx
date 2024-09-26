import React from 'react'

const HoverAndFocus = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl'>Hover and Focus</h1>
                <button className='w-40 bg-sky-400 text-slate-50 rounded-full py-2 mx-2 hover:bg-sky-900 shadow-slate-400'>
                    Save
                </button>
                <button className='w-40 bg-yellow-400 text-white rounded-full py-2 mx-2 hover:bg-yellow-900 focus:ring focus:ring-yellow-200 shadow-slate-400'>
                    Edit
                </button>
            </div>
            <div>
                <input type="email" className='border border-gray-400 text-gray-950 text-sm rounded-lg block w-1/2 p-2.5 focus:outline-red-500 peer' />

                <p className='mt-2 text-red-600 invisible peer-invalid:visible'>Please provide a valid e-mail</p>
            </div>
        </>
    )
}

export default HoverAndFocus