import React from 'react'
import { RiCodeLine, RiTeamFill } from 'react-icons/ri'

const Skills = ({dark}) => {
  return (
    <section id='skills' className='flex flex-col w-full '>
      <div className='flex justify-center ' >
         <h1 className="text-4xl font-bold mt-10" data-aos="fade-up" data-aos-duration="1000">
          My <span className="text-purple-700">Skills</span>
        </h1>
      </div>
      <div className='flex justify-center mt-7 mx-7' data-aos = "fade-up" data-aos-duration = "1000">
        <p className='opacity-60'>A blend of technical expertise and interpersonal abilities that drive effective development.</p>
      </div>
      <div className=' grid grid-rows-1 place-items-center gap-5 mx-7 md:grid-cols-2 pb-20'>
        <div className={`mt-20 border border-transparent transition-all  duration-500 ${dark ? "bg-[#2f3034e2]" : "bg-[#dee8f7]"} hover:border-purple-700 rounded-2xl p-7`}>
          <div className='font-bold text-xl flex items-center '>
            <div className='bg-purple-700/20 p-3 mr-2 rounded-xl'>
                <RiCodeLine className='text-purple-700'/>
            </div>
            <h1>Tehnical Skills</h1>
          </div>

          <div className='mt-5 grid  gap-5  '>
            <div className='grid grid-cols-2 text-xs md:text-l md:grid-cols-2 lg:text-l lg:grid-cols-4 gap-3' >
               {["HTML","CSS","JavaScript","React","Tailwind","Node.js","MongoDB","Java"].map((item)=>(
                <p key={item} className='bg-purple-700/10 border-2 w-full h-12 border-purple-700 rounded-2xl p-3 flex items-center justify-center text-center'>
                  {item}
                </p>
               ))}
            </div>
          </div>
        </div>
        <div className={` mt-20 border border-green-300/0 transition-all duration-500 ease-in-out ${dark ? "bg-[#2f3034e2]" : "bg-[#eaf8e5]"} hover:border-green-300  rounded-2xl p-7`}>
        <div className='font-bold text-xl flex items-center'>
            <div className='bg-green-300/10 p-3 mr-2 rounded-xl'>
                <RiTeamFill className='text-green-300'/>
            </div>
            <h1>Soft Skills</h1></div>
            <div className='mt-5 grid gap-5'>
               <div className='grid grid-cols-2 text-xs md:text-l md:grid-cols-2 lg:text-l lg:grid-cols-4 gap-3'>
                {["Communication","Problem Solver","Quick Learner","Collaborative","Team Work","Time Management","Continuous Learning","Adaptability"].map((item)=>(
                  <p key={item} className='bg-green-300/10 border-2 w-full h-12 border-green-300 rounded-2xl p-3 flex items-center justify-center text-center'>
                    {item}
                  </p>
                ))}
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
