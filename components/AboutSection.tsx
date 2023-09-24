import React from 'react'
import Image from 'next/image'
import  {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from "react-icons/ai"

const skills = [
    { skill: "SQL" },
    { skill: "XAMPP" },
    { skill: "C/C++" },
    { skill: "Java" },
    { skill: "Python" },
    { skill: "Virtual Machine (Cloudera)" },
    { skill: "Public Speaking" },
    { skill: "Database Design" },
    { skill: "Communication" },
    { skill: "Blade PHP" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Vue.js" },
    { skill: "GitHub" },
    { skill: "Mentoring" },
    { skill: "Teaching" },
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className='my-12 pb-12 md:pt-16 md:pb-38'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'/>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:test-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Introduction</h1>
                    <p>
                        {" "}
                        My name is Alden Ardiwinata Putra. I often go by Alden. Currently at my third-year grade studying Computer Science in BINUS University, focusing on Database Technology. 
                    </p>
                    <br />
                    <p>
                        I&apos;m a {" "}
                        <span className='font-bold'>{"tech-savvy"}</span>, and a 
                        <span className='font-bold'>{" passionate"}</span> learner who recognizes the role of communications as the grand foundation to attain successfully mutual understanding in every form of collaboration and teamwork. Currently in pursuit to achieve a prominent career in the world of IT, especially data.
                    </p>
                    <br />
                    <p>
                    I&apos;m 
                        <span className='font-bold'>{" dedicated"}</span> to upscaling my technical competencies to attain sophisticated enterprise-level experience in real-world, data-driven, problem-solving scenarios. 
                    </p>

                    {/* <br />
                    <p>
                        Lorem ipsum dolor sit amet, {" "}
                        <span className='font-bold text-teal-500'>never stop growing</span> {" "}
                        consectetur adipiscing elit. Suspendisse varius quis lorem a vulputate. Pellentesque vitae neque nec lacus facilisis tempor. Fusce a nisi mattis, maximus odio sed, luctus ante. Curabitur quis vulputate quam. Etiam magna est, molestie ut ligula sed, ullamcorper euismod urna. Sed ornare est ligula, sed pretium nisl tempor vel. In lobortis felis sed odio semper, nec sagittis leo bibendum. Nullam faucibus sapien a orci convallis consequat. Sed id lorem eu leo lobortis posuere. Proin sagittis eros nisi, sed porttitor orci mollis quis. Maecenas eu mattis eros, sit amet efficitur risus. Suspendisse ullamcorper ex at lorem volutpat.
                    </p> */}
                </div>

                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Skills</h1>
                    <div className='flex flex-wrap flex-row justify-senter md:justify-start'>
                        {skills.map((item, idx) => {
                            return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-teal-600 rounded font-semibold"> {item.skill} </p>
                        })}
                    </div>
                    {/* <Image className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0" src="/stat.png" alt="" width={325} height={325}/> */}
                    
                    <p></p>
                </div>
            </div>
            
            <div className='my-10'>
                <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:test-left md:p-4 md:space-y-0 md:space-x-10'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Contacts</h1>
                        <p>alden.putra@binus.ac.id</p>
                        <p>+62 812 8690 6326</p>
                        <a href="https://github.com/aldenaputra" rel="noreferrer" target="_blank">
                            <p className='hover:text-blue-700 no-underline hover:underline'>https://github.com/aldenaputra</p>
                        </a>
                        <a href="https://www.linkedin.com/in/aldenaputra/" rel="noreferrer" target="_blank">
                            <p className='hover:text-blue-700 no-underline hover:underline'>https://www.linkedin.com/in/aldenaputra/</p>
                        </a>
                    </div>

                    <div className='md:w-1/2'>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection