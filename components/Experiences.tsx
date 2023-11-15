import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'


const experiences = [
    {
        name: "Informal Teaching & Mentoring",
        desc: "Conducted a teaching and mentoring activities for junior level students for various programming languages (mainly in Java & C/C++). Experienced as a tutor and accepts several junior level students including international students with positive results.",
        image: "/teaching.png",
        soft: ["Teaching", "Mentoring", "C/C++", "Java"],
        link:"https://lavender-magazine-13e.notion.site/Review-Questions-e0250f82b23c410da5f176db908c5c7c?pvs=4",
    },
    {
        name: "Social Awareness Campaign at Sekolah Lentera Indonesia - BINUS University",
        desc: "We conducted a social awareness campaign in Sekolah Lentera Indonesia to fulfill the final project requirement. The event went successfully and left a remarkable impression on the audience and the school officials.",
        image: "/campaign.jpg",
        soft: ["Public Speaking"],
    },
    {
        name: "Content & Design - Paradigma Remaja",
        desc: "Initiating and creating content graphic design in a team of several creative members. Help provide suggestions related to the aesthetics and elaborating it to the stakeholders with wide formats of media (Photoshop, Hitfilm Express, Premiere Pro, Paint.NET, Canva).",
        image: "/pardig.png",
        soft: ["Communication", "Project Management"],
    },
    {
        name: "Belajar Bersama Maestro 2019 - Kementerian Pendidikan dan Kebudayaan Indonesia",
        desc: "Organizing a youth orchestra concert, OrkesKita, in a national-level program initiated by the Ministry of Education and Culture. Undergo 14 days quarantine of national training program organized by the Ministry of Education and Culture with Mentor Addie M. S.",
        image: "/bbm2019.JPG",
        soft: ["Time Management", "Problem Solving", "Risk Management"],
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EXFz-g_oArFCrneHreUiWykBJKMcUB_-n-ljTE7fMGMFyw&e=hsEuHh",
    },
    {
        name: "Chairman of Kelompok Ilmiah Remaja - SMA Regina Pacis",
        desc: "I was chosen as the Chairman of Regina Pacis High School's Youth Science Club. Participated in several national-level events. Executing and proposing organizational agendas and programs during the year-long service period.",
        image: "/KIR.jpg",
        soft: ["Leadership", "Project Management", "Research"],
    },
]

const Experiences = () => {
    return (
        <section id="experiences">
            <div className='my-12 pb-12 md:pt-16'>

                <h1 className='my-10 text-center font-bold text-4xl'>
                    Experiences
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                </h1>

                <div className='flex flex-col space-y-28'>
                    {experiences.map((experience, idx) => {
                        // if(experience.link){
                            return(
                                <div key={idx}>
                                    <SlideUp offset="-300px 0px -300px 0px">
                                        <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                            <div className='mt-8 md:w-1/2'>
                                                {experience.link ?
                                                    <Link href={experience.link} target="_blank">
                                                        <Image
                                                        src={experience.image}
                                                        alt=""
                                                        width={1000}
                                                        height={1000}
                                                        className="rounded-xl shadow-xl hover:opacity-70"
                                                        />
                                                    </Link>
                                                : 
                                                    <Image
                                                    src={experience.image}
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className="rounded-xl shadow-xl"
                                                    />
                                                }
                                            </div>
                                            
                                            <div className='mt-8 md:w-1/2'>
                                                <h1 className='text-3xl font-bold mb-6'>{experience.name}</h1>
                                                <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{experience.desc}</p>
                                                
                                                <div className='flex flex-row align-bottom space-x-4'>
                                                    <div className='flex flex-wrap flex-row justify-start'>
                                                        {experience.soft.map((soft, softidx) => {
                                                            return(
                                                                <p key={softidx} className="bg-gray-200 dark:border dark:bg-stone-900 dark:text-white px-3 py-1.5 mb-1 mr-1 text-teal-600 text-sm rounded-full font-semibold"> {soft} </p>
                                                            )
                                                        })}
                                                    </div>
                                                    
                                                    {experience.link ?
                                                        <Link href={experience.link} target="_blank">
                                                            <BsArrowUpRightSquare
                                                            size={30}
                                                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                            />
                                                        </Link>
                                                    :
                                                        null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </SlideUp>
                                </div>
                            )
                        // }

                        // return(
                        //     <div key={idx}>
                        //         <SlideUp offset="-300px 0px -300px 0px">
                        //             <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                        //                 <div className='mt-8 md:w-1/2'>
                        //                     <Image
                        //                     src={experience.image}
                        //                     alt=""
                        //                     width={1000}
                        //                     height={1000}
                        //                     className="rounded-xl shadow-xl hover:opacity-70"
                        //                     />
                        //                 </div>
                                        
                        //                 <div className='mt-8 md:w-1/2'>
                        //                     <h1 className='text-3xl font-bold mb-6'>{experience.name}</h1>
                        //                     <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{experience.desc}</p>
                        //                     <div className='flex flex-row align-bottom space-x-4'>
                        //                         <div className='flex flex-wrap flex-row justify-start'>
                        //                             {experience.soft.map((soft, softidx) => {
                        //                                 return(
                        //                                     <p key={softidx} className="bg-gray-200 px-3 py-1.5 mb-1 mr-1 text-teal-600 text-sm rounded-full font-semibold"> {soft} </p>
                        //                                 )
                        //                             })}
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //         </SlideUp>
                        //     </div>
                        // )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experiences