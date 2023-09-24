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
        link:"https://lavender-magazine-13e.notion.site/Review-Questions-e0250f82b23c410da5f176db908c5c7c?pvs=4",
    },
    {
        name: "Social Awareness Campaign at Sekolah Lentera Indonesia - BINUS University",
        desc: "We conducted a social awareness campaign in Sekolah Lentera Indonesia to fulfill the final project requirement. The event went successfully and left a remarkable impression on the audience and the school officials.",
        image: "/campaign.jpg",
    },
    {
        name: "Speaker in 'CLOUD: Control Your Hours, Understand Your Rhythm' by AMSA Universitas Pelita Harapan - Paradigma Remaja",
        desc: "Invited to attend representing Paradigma Remaja as a source person and speaker in social campaign organized by AMSA Universitas Pelita Harapan. Provide technical information, insight, and spread awareness in front of a vast number of high school students with an interactive approach.",
        image: "/cloud.jpg",
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EQ3U_a4Rpp5Nn-0M0CMS4f0B9wUPduuDTRFIVFG7t938Hw&e=K7eyhW",
    },
    {
        name: "Content & Design - Paradigma Remaja",
        desc: "Initiating and creating content graphic design in a team of several creative members. Help provide suggestions related to the aesthetics and elaborating it to the stakeholders with wide formats of media (Photoshop, Hitfilm Express, Premiere Pro, Paint.NET, Canva).",
        image: "/pardig.png",
    },
    {
        name: "Best Male Student - SMA Regina Pacis Graduation",
        desc: "I graduated (batch 63 year 2021, AVG 91/100) from Regina Pacis Bogor High School as the Best Male Student in Natural Science and Math major. The event takes place at the school hall with strict health protocols.",
        image: "/bestmale.jpg",
    },
    {
        name: "Belajar Bersama Maestro 2019 - Kementerian Pendidikan dan Kebudayaan Indonesia",
        desc: "Organizing a youth orchestra concert, OrkesKita, in a national-level program initiated by the Ministry of Education and Culture. Undergo 14 days quarantine of national training program organized by the Ministry of Education and Culture with Mentor Addie M. S.",
        image: "/bbm2019.JPG",
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EXFz-g_oArFCrneHreUiWykBJKMcUB_-n-ljTE7fMGMFyw&e=hsEuHh",
    },
    {
        name: "Chairman of Kelompok Ilmiah Remaja - SMA Regina Pacis",
        desc: "I was chosen as the Chairman of Regina Pacis High School's Youth Science Club. Participated in several national-level events. Executing and proposing organizational agendas and programs during the year-long service period.",
        image: "/KIR.jpg",
    },
]

const Experiences = () => {
    return (
        <section id="experiences">
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='my-10 text-center font-bold text-4xl'>
                    Experiences & Honors
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                </h1>

                <div className='flex flex-col space-y-28'>
                    {experiences.map((experience, idx)=>{
                        if(experience.link){
                            return(
                                <div key={idx}>
                                    <SlideUp offset="-300px 0px -300px 0px">
                                        <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                            <div className='mt-8 md:w-1/2'>
                                                <Link href={experience.link} target="_blank">
                                                    <Image
                                                    src={experience.image}
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className="rounded-xl shadow-xl hover:opacity-70"
                                                    />
                                                </Link>
                                            </div>
                                            
                                            <div className='mt-8 md:w-1/2'>
                                                <h1 className='test-4xl font-bold mb-6'>{experience.name}</h1>
                                                <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{experience.desc}</p>
                                                <div className='flex flex-row align-bottom space-x-4'>
                                                    <Link href={experience.link} target="_blank">
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
                        }
                        return(
                            <div key={idx}>
                                <SlideUp offset="-300px 0px -300px 0px">
                                    <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                        <div className='mt-8 md:w-1/2'>
                                            <Image
                                            src={experience.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </div>
                                        
                                        <div className='mt-8 md:w-1/2'>
                                            <h1 className='test-4xl font-bold mb-6'>{experience.name}</h1>
                                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{experience.desc}</p>
                                            <div className='flex flex-row align-bottom space-x-4'></div>
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

export default Experiences