import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'


const projects = [
    {
        name: "Data Clustering & Classification on Multiple Datasets, Big Data Processing Project",
        desc: "Performing data clustering (trash pollution dataset) using k-means model projected onto scatter plot and classification model (airplane schedule delay dataset) in Cloudera Quickstart VM (Jupyter Notebook).",
        image: "/vis.png",
        techstack: ["SQL", "Jupyter Notebook", "Cloudera Quickstart VM", "Machine Learning", "Apache Spark", "VMware Workstation"],
        link:"https://github.com/aldenaputra/clustering-and-classification.git",
    },
    {
        name: "SARIMAX Prediction Model on Online Retail Dataset using Python (Google Colaboratory)",
        desc: "Conducted exploratory data analysis (EDA) of an online retail dataset and executing model training to predict sales using SARIMAX algorithm in python (Google Colaboratory).",
        image: "/sarimax.png",
        techstack: ["Python", "Pandas", "Machine Learning", "Google Colab"],
        link:"https://github.com/aldenaputra/SARIMAX-prediction-model.git",
    },
    {
        name: "Comparison of 4 SVM Kernels Performances in Aviation Satisfaction Dataset, Data Mining Project",
        desc: "Conducted a complete process of KDD (Knowledge Discovery in Databases): exploratory data analysis (EDA), data preprocessing, outlier analysis, model fitting (classification prediction analysis), model evaluation, and permutation importance between SVM kernels (linear, RBF, polynomial, and sigmoid), of an aviation satisfaction dataset using python (Google Colaboratory).",
        image: "/datamining.png",
        techstack: ["Python", "Pandas", "Machine Learning", "Google Colab"],
        link:"https://github.com/aldenaputra/svm-4-kernel-comparison.git",
    },
    {
        name: "Basic Data Visualization in Jupyter Notebook, Utilizing SparkSQL on Cloudera Quickstart VM, Big Data Processing Project",
        desc: "Performing basic data visualization and queries (farm dataset) using SparkSQL (pySpark) in Jupyter Notebook on Cloudera Quickstart Virtual Machine.",
        image: "/clasclus.png",
        techstack: ["SQL", "Jupyter Notebook", "Cloudera", "Virtual Machine", "Apache Spark", "VMware Workstation", "Python"],
        link:"https://github.com/aldenaputra/data-visualization-in-jupyter-spark-cloudera.git",
    },
    {
        name: "PlaTo UI/UX Prototyping, Human & Computer Interaction Project",
        desc: "Designing UI and conducting UX testing (via survey and prototype testing) for IoT application that featured to perform automatic plant nursery remotely.",
        image: "/plato.png",
        techstack: ["UI Prototyping", "UX Testing", "Figma"],
        link:"https://www.figma.com/file/UQahPrf3riu2UKva5k0csY/HCI---AoL-Case?type=design&node-id=101%3A2&mode=design&t=QbNj488Xs4JhnUr4-1",
    },
    {
        name: "Travail: Travel and Rail. A Laravel Full-Stack E-Ticketing Website, Software Engineering Project",
        desc: "Entrusted to lead a software engineering project, Travail: Travel & Rail. Built a fully functional (full-stack) train e-ticketing website using Laravel's framework.",
        image: "/travail.png",
        techstack: ["MySQL", "Laravel", "Vue.js", "Apache XAMPP", "HTML", "CSS", "JavaScript", "Git", "Figma"],
        link:"https://github.com/VzGarnet/Travail.git",
    },
    {
        name: "Portfolio Website Project using Next.js Framework",
        desc: "Created and deployed a portfolio website using the Next.js framework and free hosting services from Vercel.",
        image: "/porto.png",
        techstack: ["Next.js", "HTML", "Tailwind CSS", "TypeScript", "Git", "Vercel"],
        link:"https://github.com/aldenaputra/webportoexercise.git",
    },
    {
        name: "KarenJET, Database Design Project",
        desc: "Entrusted to lead a database design project, KarenJET. Designing a database for enterprise scenarios and developing a mitigation plan for system alteration and recovery for specific scenarios that involve database transactions. Performed a strict normalization from 1NF to 5NF and created diagrams to elaborate the database system.",
        image: "/Database Design.png",
        techstack: ["Visual Paradigm", "Database Design", "Excel", "Figma"],
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ea_I6XQHFexNo-1RpLEk5MwBu3iwi47HMqHfiuZeruUoZg&e=zqngRY",
    },
    {
        name: "Java CRUD + Search Text-Based Application, Object Oriented Programming Final Project",
        desc: "Design a java text-based application that implements the 4 main principles of object-oriented programming, input validation, and CRUD + search algorithm.",
        image: "/javacruds.png",
        techstack: ["Java", "Eclipse IDE"],
        link:"https://github.com/aldenaputra/java-crud-search.git",
    },
    {
        name: "Algorithm Design in C, Algorithm & Programming Project",
        desc: "Constructing several algorithms in C to solve logical problems and creating each flowchart to describe further the algorithm scheme.",
        image: "/algoprog.png",
        techstack: ["C/C++", "Dev-C++"],
        link:"https://github.com/aldenaputra/algoprog_AoL.git",
    },
    {
        name: "Computer Network Design & Prototyping, Computer Network Case Study & Project",
        desc: "Prototyping a computer network for specific case study and performing a comprehensive network simulation using Cisco Packet Tracer.",
        image: "/cn.png",
        techstack: ["Cisco Packet Tracer", "Figma"],
        link:"https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EW2O2MDH3w1Nofp_3QBWyzsBNHT_M0GTICEKxs568-y1Bg&e=z31jAs",
    },
    {
        name: "Systematic Literature Review on IT Strategic Workspaces: Approach to Develop an Ideal Environment",
        desc: "Conducted a SLR research (first author) regarding IT workspaces in order to find tangible metrics and method to develop an ideal environment for IT human resources. Accepted and presented in The 9th International Conference on Computing, Engineering and Design (ICCED 2023).",
        image: "/rmcs.png",
        techstack: ["Research", "Mendeley", "Systematic Literature Review"],
        link:"https://aldenisius.notion.site/Research-Paper-SLR-8fd20ca95e6342cfaedd44daebe983a3?pvs=4",
    },
]

const ProjectSection = () => {
    return (
        <section id="projects">
            <div className='my-12 pb-12 md:pt-16'>
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
                                        <h1 className='text-3xl font-bold mb-6'>{project.name}</h1>
                                        <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.desc}</p>

                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <div className='flex flex-wrap flex-row justify-start'>
                                                {project.techstack.map((tech, techidx)=> {
                                                    return(
                                                        <p key={techidx} className="bg-gray-200 dark:border dark:bg-stone-900 dark:text-white px-3 py-1.5 mb-1 mr-1 text-teal-600 text-sm rounded-full font-semibold"> {tech} </p>
                                                    )
                                                })}
                                            </div>

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
            </div>
        </section>
    )
}

export default ProjectSection