import React from 'react'
import AnimatedCard from './AnimatedCard'

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden  flex flex-col justify-center
     items-center border-b-3 border-b-fuchsia-600   bg-linear-to-r from-stone-950 via-fuchsia-950 to-indigo-800 ">

      <div className=' hidden md:flex gap-3 md:w-[85vw] justify-between w-[98vw] '>
        <AnimatedCard

          title="Meta Ads"
          value="FB & Instagram"
          accent="green"
        />

        <AnimatedCard

          title="Google Ads"
          value="Search Page , Youtube"
          accent="green"
        />

      </div>
      <section className='flex justify-center items-center  h-[55vh] ' >

        <div className='text-center ps-2.5'>
          <h1 className='font-extrabold  text-[10vh]'>
            Hi, I’m Sumit

          </h1>
          <h2 className='font-extrabold text-[6vh]'>
            Digital Marketer | Meta Ads • Google Ads • SEO
          </h2>
        </div>
        <div>
          <div className='flex flex-col gap-5'>


          </div>
        </div>

      </section>
      <div className=' hidden gap-3 md:gap-24  md:flex  md:w-[85vw] w-[98vw]'>
        <AnimatedCard

          title="SEO"
          value="On Pagde, Off Page, Technical"
          accent="green"
        />
        <AnimatedCard

          title="Website Devlopment"
          value="Wordpress"
          accent="green"
        />
        <AnimatedCard

          title="Canva Design"
          value="AD Creatives, Reels, Video"
          accent="green"
        />

      </div>

    </div>
  )
}

export default About