import { useEffect, useState } from "react";
import photo from "./photo.JPG";
import { Duration } from "./Util";
import {AiFillLinkedin,AiOutlineMail,AiFillPhone,AiFillGithub} from "react-icons/ai";
export default function About() {
    const [exp,setExp]=useState("9 Years 6 Months 0 Days 0 Hours 0 Minutes 0 Seconds");
    useEffect(() => {
        setInterval(()=>{
            let Dur=Duration();
            setExp(Dur.years+" Years "+ Dur.months+" Months "+ Dur.days+" Days "+Dur.hours+" Hours "+Dur.minutes+" Minutes "+ Dur.seconds+" Seconds ")
        },1000)
      },[]);
    return (
    <>
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Veerarajan.
                <br className="hidden lg:inline-block" /> Senior Consultant
                <br className="hidden lg:inline-block" />
                <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-8 leading-relaxed">
                        Innovative, task-driven professional with {exp} of experience across diverse industries 
                        (Health Care, Logistics, Nuclear power plant). Equipped with a record of success in consistently 
                        identifying and providing the technological needs of companies through ingenious innovation. 
                        Proficient in UI design and developing databases, creating interfaces troubleshooting simple/complex issues,
                        and implementing new features based on user feedback.
                </p>
                <br className="hidden lg:inline-block" />
                <br className="hidden lg:inline-block" />
                <br className="hidden lg:inline-block" />
                <div className="flex">
                    <div>
                        <a href="mailto:veerarajan.karunanithi@gmail.com" className="flex">
                            <AiOutlineMail className="w-7 h-7 ml-1 text-indigo-400 leading-relaxed"/> 
                            <span className="px-2">veerarajan.karunanithi@gmail.com</span>
                        </a>
                    </div>
                    <div className="px-8 mt-10 lg:mt-0">
                        <p className="text-indigo-400 leading-relaxed flex">
                            <AiFillPhone className="w-7 h-7 ml-1"/>
                            <span className="px-2">+919952117760</span>
                        </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <a href="https://www.linkedin.com/in/veerarajan-karunanithi-9165222b/" rel="noreferrer" target="_blank" className="flex">
                            <AiFillLinkedin className="w-7 h-7 ml-1 text-indigo-400 leading-relaxed"/> 
                            <span className="px-2">LinkedIn</span>
                        </a>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <a href="https://github.com/veerarajank" rel="noreferrer" target="_blank" className="flex">
                            <AiFillGithub className="w-7 h-7 ml-1 text-indigo-400 leading-relaxed"/> 
                            <span className="px-2">GitHub</span>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="">
                <img
                className="object-cover object-center rounded"
                alt="hero"
                src={photo}
                />
            </div>
            </div>
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
        </section>
    </>
    );
  }