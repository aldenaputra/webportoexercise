import React from 'react'
import Image from 'next/image'

const skills = [
    { skill: "SQL" },
    { skill: "XAMPP" },
    { skill: "Jupyter Notebooks" },
    { skill: "Virtual Machine (Cloudera)" },
    { skill: "Public Speaking" },
    { skill: "Database Design" },
    { skill: "Communication" },
    { skill: "C/C++" },
    { skill: "Java" },
    { skill: "Python" },
    { skill: "Blade PHP" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Vue.js" },
    { skill: "GitHub" },
    
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'/>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:test-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                    <p>
                        {" "}
                        Hi, my name is Alden Ardiwinata Putra {" "}
                        <span className='font-bold'>{"highly ambitious"}</span>,
                        <span className='font-bold'>{" self-motivated"}</span>,
                        <span className='font-bold'>{" driven"}</span> based in Jakarta
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius quis lorem a vulputate. Pellentesque vitae neque nec lacus facilisis tempor. Fusce a nisi mattis, maximus odio sed, luctus ante. Curabitur quis vulputate quam. Etiam magna est, molestie ut ligula sed, ullamcorper euismod urna. Sed ornare est ligula, sed pretium nisl tempor vel. In lobortis felis sed odio semper, nec sagittis leo bibendum. Nullam faucibus sapien a orci convallis consequat. Sed id lorem eu leo lobortis posuere. Proin sagittis eros nisi, sed porttitor orci mollis quis. Maecenas eu mattis eros, sit amet efficitur risus. Suspendisse ullamcorper ex at lorem volutpat.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu purus mi. Aenean nec orci aliquet ipsum mollis efficitur quis vitae augue. Sed vitae tortor eget nibh varius tincidunt vel et justo. Phasellus in neque leo. Nunc eros neque, vehicula venenatis eros vitae, ornare lobortis mauris. Sed dapibus rutrum ante id ultrices. Aliquam tellus dolor, pellentesque nec eros vel, tempor egestas elit. Duis imperdiet diam sapien, nec elementum urna semper vel. Sed congue commodo nulla eget efficitur. Duis.                       
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, {" "}
                        <span className='font-bold text-teal-500'>never stop growing</span> {" "}
                        consectetur adipiscing elit. Suspendisse varius quis lorem a vulputate. Pellentesque vitae neque nec lacus facilisis tempor. Fusce a nisi mattis, maximus odio sed, luctus ante. Curabitur quis vulputate quam. Etiam magna est, molestie ut ligula sed, ullamcorper euismod urna. Sed ornare est ligula, sed pretium nisl tempor vel. In lobortis felis sed odio semper, nec sagittis leo bibendum. Nullam faucibus sapien a orci convallis consequat. Sed id lorem eu leo lobortis posuere. Proin sagittis eros nisi, sed porttitor orci mollis quis. Maecenas eu mattis eros, sit amet efficitur risus. Suspendisse ullamcorper ex at lorem volutpat.
                    </p>

                </div>

                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-senter md:justify-start'>
                        {skills.map((item, idx) => {
                            return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-teal-600 rounded font-semibold"> {item.skill} </p>
                        })}
                    </div>
                    <Image className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0" src="/stat.png" alt="" width={325} height={325}/>
                    
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection