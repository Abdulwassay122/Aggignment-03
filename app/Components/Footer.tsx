import React from 'react'
import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import twitter from './icons/twitter.png'
import linkedin from './icons/linkedin.png'
export default function Footer() {
  return (
    <footer className='flex flex-row bg-[#f4efff]'>
      <div className='flex flex-row justify-start   h-12 w-full items-center mx-10'>
        <div>
            © 2024 aw122598@gmail.com —@Abdul Wassay
        </div>
        
      </div>
      <div className='flex flex-row justify-end   h-12 w-full items-center mx-6'>
        
        <div className='flex flex-row justify-end '>
            <a href=""><img className='h-6 mx-1' src={facebook.src} alt="" /></a>
            <a href=""><img className='h-6 mx-1' src={linkedin.src} alt="" /></a>
            <a href=""><img className='h-6 mx-1' src={instagram.src} alt="" /></a>
            <a href=""><img className='h-6 mx-1' src={twitter.src} alt="" /></a>
        </div>
      </div>
      </footer>
  )
}
