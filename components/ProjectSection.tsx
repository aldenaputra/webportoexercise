import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'


const projects = [
    {
        name: "Travail: Travel & Rail, Software Engineering Project",
        desc: "Entrusted to lead a software engineering project, Travail: Travel & Rail. Built a fully functional (full-stack) train e-ticketing website using Laravel's framework. Worked in a team of 5. The feature consists of account login registration, email confirmation, ticket and schedule displaying, seating, payment, and transaction history.",
        image: "/travail.png",
        link:"https://github.com/VzGarnet/Travail.git",
    },
    {
        name: "KarenJET, Database Design Project",
        desc: "Entrusted to lead a database design project, KarenJET. Designing a database for enterprise scenarios and developing a mitigation plan for system alteration and recovery for specific scenarios that involve database transactions. Performed a strict normalization from 1NF to 5NF and created diagrams to elaborate the database system.",
        image: "/Database Design.png",
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ea_I6XQHFexNo-1RpLEk5MwBu3iwi47HMqHfiuZeruUoZg&e=zqngRY",
    },
    {
        name: "Clustering & Classification in Cloudera, Big Data Processing Project",
        desc: "Performing clustering and classification in Cloudera using jupyter notebook. Implementing big data analysis in Python.",
        image: "/clasclus.png",
        link:"https://github.com/aldenaputra/clas-clus.git",
    },
    {
        name: "Algorithm Design in C, Algorithm & Programming Project",
        desc: "Constructing several algorithms in C to solve logical problems and creating each flowchart to describe further the algorithm scheme.",
        image: "/algoprog.png",
        link:"https://github.com/aldenaputra/algoprog_AoL.git",
    },
    {
        name: "Portfolio Website Project using Next.js Framework",
        desc: "Created and deployed a portfolio website using the Next.js framework and free hosting services from Vercel.",
        image: "/porto.png",
        link:"https://github.com/aldenaputra/webportoexercise.git",
    },
]

const ProjectSection = () => {
    return (
        <section id="projects">
            <h1 className='my-10 text-center font-bold text-4xl'>
                Projects
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            </h1>

            <div className='flex flex-col space-y-28'>
                {projects.map((project, idx)=>{
                    return(
                    <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                <div className='mt-8 md:w-1/2'>
                                    <Link href={project.link} target="_blank">
                                        <Image
                                        src={project.image}
                                        alt=""
                                        width={1000}
                                        height={1000}
                                        className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </Link>
                                </div>
                                
                                <div className='mt-8 md:w-1/2'>
                                    <h1 className='test-4xl font-bold mb-6'>{project.name}</h1>
                                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.desc}</p>
                                    <div className='flex flex-row align-bottom space-x-4'>
                                        <Link href={project.link} target="_blank">
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
        </section>
    )
}

export default ProjectSection