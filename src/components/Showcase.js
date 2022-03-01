import { UsersIcon } from "@heroicons/react/solid";
import { Showcases } from "./Config";
import { useState } from "react";
export default function Showcase() {
  const [pointer,setPointer]=useState(0);
    const [prevStyle,setPrevStyle]=useState({"visibility":"hidden"})
    const [nextStyle,setNextStyle]=useState({"visibility":""})

  const NextProject=()=> {
      let limit=Showcases.length-1;
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
    <section id="showcase">
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Showcases
        </h1>
        <div className="flex-center">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100">
                  <h1 className="title-font text-lg font-small text-white mb-3">
                    {Showcases[pointer].title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {Showcases[pointer].subtitle}
                  </h2>
                  <p className="leading-relaxed flex-wrap">
                      {Showcases[pointer].description}
                  </p>
                  <br/>
                  <span>SourceCode : </span>
                  <a href={Showcases[pointer].SourceCode}
                    key={Showcases[pointer].id}
                    rel="noreferrer"
                    target="_blank"
                    className="sm:w-1/2 w-100 p-4 text-indigo-400"><u>
                    {Showcases[pointer].Source}
                    </u>
                  </a>
                  <br/><br/>
                  <span>Languages used : {Showcases[pointer].Languages}</span>
                  <br/><br/>
                  <span>Libraries used : {Showcases[pointer].Library}</span>
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