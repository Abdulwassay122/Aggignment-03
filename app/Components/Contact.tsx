import React from 'react'
import telephone from './icons/telephone.png'
import email from './icons/email.png'
import location from './icons/location.png'
export default function Contact() {
  return (
    <div className='bg-[#f4efff] m-0'>
        <div>
        <h1 className='text-6xl font-semibold ml-20 pt-20'>Lets Meet Me</h1></div>
      <section className='flex justify-end mt-10  bg-[#cecece]'>
        <div className='mr-56 mt-12 ml-28'>
            <a className='flex my-8 text-xl' href=""><img className='h-8 mr-8 ' src={telephone.src} alt="" /> +92 319 1476707</a>
            <a className='flex my-8 text-xl' href=""><img className='h-8 mr-8 ' src={email.src} alt="" /> aw122598@gmail.com</a>
            <a className='flex my-8 text-xl' href=""><img className='h-8 mr-8 ' src={location.src} alt="" /> V22G+89Q, Aiwan-e-Sadar, Civil Lines, Karachi, Karachi City, Sindh 75580, Pakistan</a>
        </div>
        <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.38065723623!2d67.02340041038039!3d24.850845445551172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Sindh!5e0!3m2!1sen!2s!4v1729250778476!5m2!1sen!2s" width="800" height="500"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
     
    </div>
  )
}
