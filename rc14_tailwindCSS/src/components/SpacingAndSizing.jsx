import React from 'react'

const SpacingAndSizing = () => {
  return (
    <>
      <div>
        <h3 className='text-2xl'>Spacing and Sizing</h3>
        <button className='bg-blue-500 text-white p-4 m-1'>Click</button>
        <button className='bg-blue-500 text-white px-4'>Click</button>
        <button className='bg-blue-500 text-white ms-4'>Click</button>
        <button className='bg-blue-500 text-white m-4'>Click</button>
        <button className='bg-blue-500 text-white px-4 py-3 ml-2'>Click</button>
      </div>
      <div>
        <button className='bg-green-500 mx-4 px-4 py-2 border-green-700 rounded-md'>Submit</button>
        <button className='bg-green-500 mx-4 px-4 py-2 border-[3px] rounded-[10px]'>Submit</button>
        <button className='bg-green-500 mx-4 px-4 py-2 border-[3px] rounded-full'>Submit</button>
      </div>
      <div className='my-2'>
      <button className='bg-indigo-500 w-20 rounen-full py-2 mx-2'>Save</button>
      <button className='bg-indigo-500 w-[300px] rounen-full py-2 mx-2'>Save</button>
      <button className='bg-indigo-500 w-1/2 max-w-[500px] rounen-full py-2 mx-2'>Save</button>
      </div>
    </>
  );
}

export default SpacingAndSizing