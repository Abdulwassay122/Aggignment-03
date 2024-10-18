import React from 'react'
import pic  from './icons/picc.jpg'

export default function Homee() {
  return (
    <div>
      <section>
        {/* section 1 */}
        <div className='mx-60 mt-28 mb-52'>
          <h2 className='text-center text-3xl font-semibold my-4'>Forests Are Important For Survival</h2>
          <p className='text-center text-xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore cum, aliquam iure quod velit vitae atque fugit excepturi dicta magnam eum ipsam veniam similique saepe ipsa, voluptates perferendis repellendus asperiores recusandae dolores. Magnam neque ad asperiores voluptates ipsum debitis quisquam libero temporibus fugit ut dolorem eum porro deleniti, maxime molestias corporis nemo atque delectus nulla voluptate assumenda possimus! Nemo?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugiat explicabo porro, assumenda cumque veniam voluptatem minima harum accusantium, facere quas tempore earum, vel accusamus. Voluptas expedita ex at hic.</p>
        </div>
        <div className='flex justify-center items-center bg-[#f4efff] '>
          <h2 className='text-3xl font-semibold my-4'>The Largest Forest Of The World</h2>
        </div>
        {/* section 2 */}
        <div className='flex flex-row'>
            <img className='w-3/6' src={pic.src} alt="" />
            <div className='flex w-3/6  items-center justify-center'>
            <div className='mx-20'>
              <h3 className='text-4xl font-semibold text-center '>Amazon Forest Parrots</h3>
              <p className='text-center text-xl my-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis ullam deleniti nisi, iste aut dignissimos ea ipsum rem sit perferendis voluptatem soluta, mollitia deserunt est recusandae laudantium, minus eius omnis! Consectetur eaque totam doloribus recusandae omnis! Dolore, minima iste.</p>
              <div className='flex justify-center items-center'>
              <button className='bg-[#6047b3] text-white py-1 px-3 rounded content-end'>Read More &#8594;</button>
              </div>
              </div>
            </div>
        </div>
        <div>
        </div>
        <div className='mx-60 mt-36 mb-36'>
          <h2 className='text-center text-3xl font-semibold my-6'>Forests Are Important For Survival</h2>
          <p className='text-center text-xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore cum, aliquam iure quod velit vitae atque fugit excepturi dicta magnam eum ipsam veniam similique saepe ipsa, voluptates perferendis repellendus asperiores recusandae dolores. Magnam neque ad asperiores voluptates ipsum debitis quisquam libero temporibus fugit ut dolorem eum porro deleniti, maxime molestias corporis nemo atque delectus nulla voluptate assumenda possimus! Nemo?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugiat explicabo porro, assumenda cumque veniam voluptatem minima harum accusantium, facere quas tempore earum, vel accusamus. Voluptas expedita ex at hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, similique quia velit eligendi mollitia earum laudantium praesentium animi. Hic, deleniti.</p>
        </div>
      </section>
    </div>
  )
}
