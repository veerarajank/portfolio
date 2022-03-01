import { CodeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { projects } from "./Config";
export default function Projects() {
    const [pointer,setPointer]=useState(0);
    const [prevStyle,setPrevStyle]=useState({"visibility":"hidden"})
    const [nextStyle,setNextStyle]=useState({"visibility":""})

  const NextProject=()=> {
      let limit=projects.length-1;
      if (pointer<limit) setPointer(pointer+1)
      console.log(pointer+":"+limit)
      if ((pointer+1)===limit)
      {
          
        setNextStyle({"visibility":"hidden"})
        setPrevStyle({"visibility":""})
      }
      else{
        setNextStyle({"visibility":""})  
        setPrevStyle({"visibility":""})    
      }
  }
  const PreviousProject=()=> {
      if (pointer>0) setPointer(pointer-1)
      if((pointer-1)===0) 
      {
          setPrevStyle({"visibility":"hidden"})
          setNextStyle({"visibility":""})
      }
      else{
        setPrevStyle({"visibility":""})    
        setNextStyle({"visibility":""})
      }
  }

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <br className="hidden lg:inline-block" />
        <br className="hidden lg:inline-block" />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="flex-center">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100">
                 <h1 className="title-font text-lg font-medium text-white mb-3">
                    Client : {projects[pointer].client}
                  </h1>
                  <h2 className="title-font text-lg font-small text-white mb-3">
                    Title : {projects[pointer].title}
                  </h2>
                  <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {projects[pointer].subtitle}
                  </h3>
                  <p className="leading-relaxed flex-wrap">
                      {projects[pointer].description}
                  </p>
                  <span>Reference Link : </span>
                  <a href={projects[pointer].link}
                    key={projects[pointer].id}
                    rel="noreferrer"
                    target="_blank"
                    className="sm:w-1/2 w-100 p-4 text-indigo-400"><u>
                    {projects[pointer].client}
                    </u>
                  </a>
                </div>
              </div>
        </div>
        <br className="hidden lg:inline-block" />
        <br className="hidden lg:inline-block" />
        <br className="hidden lg:inline-block" />
        <div className="flex justify-between">
            <button style={prevStyle} onClick={()=>PreviousProject()} className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                &lt; Previous
            </button>
            
            <button style={nextStyle} onClick={()=>NextProject()} className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                 Next &gt;
            </button>
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
      <br className="hidden lg:inline-block" />
    </section>
  );
}