import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'


const achievements = [
    {
        name: "Big Data Analytics: Building Competitive Advantages in the Digital Age",
        desc: "Participate in webinars on big data analytics and emerging trends in the digital era.",
        image: "/bda.png",
        soft: ["Big Data"],
        link: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ee7M1__F4eZIpg03LbtKs4EBCzhUYAh1acMbskWmf7GGvQ&e=7SkcBm",
    },
    {
        name: "Introduction to Cloud (Provided by IBM)",
        desc: "Successfully completed a course on cloud computing and infrastructure on the Cognitive Class by IBM platform.",
        image: "/ic.png",
        link: "https://courses.cognitiveclass.ai/certificates/901474a25e1f4b63be7a37fb2f973258",
        soft: ["Cloud Infrastructure", "Cloud Computing"],
    },
    {
        name: "Strategy in Optimizing Digital Advertising",
        desc: "Participated in a seminar on the convenience of advertising in the digital age and an introduction to the tools currently popular in digital advertising.",
        image: "/sa.png",
        link: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EQJ0XBlLnh5En2w-a6I0QWEBLg9SNOk9Rj6w8UTuTwWAFA&e=a2SkbY",
        soft: ["Cloud Infrastructure", "Cloud Computing"],
    },
    {
        name: "Speaker in 'CLOUD: Control Your Hours, Understand Your Rhythm' by AMSA Universitas Pelita Harapan - Paradigma Remaja",
        desc: "Invited to attend representing Paradigma Remaja as a source person and speaker in social campaign organized by AMSA Universitas Pelita Harapan. Provide technical information, insight, and spread awareness in front of a vast number of high school students with an interactive approach.",
        image: "/cloud.jpg",
        soft: ["Public Speaking", "Source Person"],
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EQ3U_a4Rpp5Nn-0M0CMS4f0B9wUPduuDTRFIVFG7t938Hw&e=K7eyhW",
    },
    {
        name: "Best Male Student - SMA Regina Pacis Graduation",
        desc: "I graduated (batch 63 year 2021, final grade: 93.47) from Regina Pacis Bogor High School as the Best Male Student in Natural Science and Math major. The event takes place at the school hall with strict health protocols.",
        image: "/bestmale.jpg",
        soft: ["Time Management"],
    },
]

const Achievements = () => {
    return (
        <section id="achievements">
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>

                <h1 className='my-10 text-center font-bold text-4xl'>
                    Achievements
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                </h1>

                <div className='flex flex-col space-y-28'>
                    {achievements.map((achievement, idx) => {
                        return(
                            <div key={idx}>
                                <SlideUp offset="-300px 0px -300px 0px">
                                    <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                        <div className='mt-8 md:w-1/2'>
                                            {achievement.link ?
                                                <Link href={achievement.link} target="_blank">
                                                    <Image
                                                    src={achievement.image}
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className="rounded-xl shadow-xl hover:opacity-70"
                                                    />
                                                </Link>
                                            : 
                                                <Image
                                                src={achievement.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl"
                                                />
                                            }
                                        </div>
                                        
                                        <div className='mt-8 md:w-1/2'>
                                            <h1 className='text-3xl font-bold mb-6'>{achievement.name}</h1>
                                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{achievement.desc}</p>
                                            
                                            <div className='flex flex-row align-bottom space-x-4'>
                                                <div className='flex flex-wrap flex-row justify-start'>
                                                    {achievement.soft.map((soft, softidx) => {
                                                        return(
                                                            <p key={softidx} className="bg-gray-200 px-3 py-1.5 mb-1 mr-1 text-teal-600 text-sm rounded-full font-semibold"> {soft} </p>
                                                        )
                                                    })}
                                                </div>
                                                
                                                {achievement.link ?
                                                    <Link href={achievement.link} target="_blank">
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
                    })}
                </div>
            </div>
        </section>
    )
}

export default Achievements