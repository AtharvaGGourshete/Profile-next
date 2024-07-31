import React from 'react'
import Image from 'next/image'

const school = () => {
  return (
    <div className="min-h-[87vh] bg-gray-950 w-full">
      <Image
      src={"/lpps.png"}
      height={1000}
      width={1000}
      className='w-full bg-center hover:blur mx-auto max-w-screen-xl bg-blend-900'
      />
      <div className='text-8xl text-center flex justify-center align-center items-center text-white'>
      Lok Puram Public School
      </div>
    </div>
  )
}

export default school