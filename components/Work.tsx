import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'


const works = [
    {
        name: "Data Scientist Intern at Toyota Astra Financial Services (TAFS) - MSIB Kampus Merdeka",
        desc: "Currently doing an internship as a data scientist at Toyota Astra Financial Services (TAFS). As an awardee of the MSIB Kampus Merdeka Batch 6, I will be part of Pt. Astra International Tbk. in TAFS subsidiary for approximately 5 months. My project revolves around the HR System and the development of data science & analytics for the company's internal operations.",
        image: "/msib.jpg",
        techstack: ["Python", "Jupyter Notebook", "Microsoft Power BI", "Machine Learning", "Data Analytics", "DAX", "Microsoft Excel"],
        link:"https://www.linkedin.com/posts/aldenaputra_astracareer-astrakampusmerdeka-msib6-activity-7163822170203258881-tVzq?utm_source=share&utm_medium=member_desktop",
    },
]

const WorkSection = () => {
    return (
        <section id="projects">
            <div className='my-12 pb-12 md:pt-16'>
                <h1 className='my-10 text-center font-bold text-4xl'>
                    Work
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                </h1>

                <div className='flex flex-col space-y-28'>
                    {works.map((work, idx)=>{
                        return(
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2'>
                                        <Link href={work.link} target="_blank">
                                            <Image
                                            src={work.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    
                                    <div className='mt-8 md:w-1/2'>
                                        <h1 className='text-3xl font-bold mb-6'>{work.name}</h1>
                                        <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{work.desc}</p>

                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <div className='flex flex-wrap flex-row justify-start'>
                                                {work.techstack.map((tech, techidx)=> {
                                                    return(
                                                        <p key={techidx} className="bg-gray-200 dark:border dark:bg-stone-900 dark:text-white px-3 py-1.5 mb-1 mr-1 text-teal-600 text-sm rounded-full font-semibold"> {tech} </p>
                                                    )
                                                })}
                                            </div>

                                            <Link href={work.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkSection