import React from 'react'
import pic1 from './icons/pic1.png'
export default function About() {
  return (
    <div>
      <section className='flex justify-end '>
        <div className='w-full'>
          <div className='ml-20 mr-40 my-40'>
            <h1 className='text-8xl font-semibold mr-96 mb-14 '>ABDUL WASSAY</h1>
            <p className='text-3xl mr-36'>Knows ReactJS, NextJS, HTML, CSS, Javascript, Typescript and Tailwind CSS   and currently learning AI at Governer Initiative of genAI, Web3 and Mataverse</p>
            </div>
        </div>
        <div className='w-3/5'>
            <img className='w-full ' src={pic1.src} alt="" />
        </div>
      </section>
    </div>
  )
}
