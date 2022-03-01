import { HomeIcon } from "@heroicons/react/solid";

export default function Navbar() {
    window.addEventListener("scroll",()=>{
        
        document.querySelectorAll("section").forEach((section)=>{
            document.querySelectorAll("a[href='#"+section.id+"']")[0].classList.remove("text-white")
            if ((window.scrollY>=section.offsetTop)&&(window.scrollY<=(section.offsetTop+section.scrollHeight))){
                document.querySelectorAll("a[href='#"+section.id+"']")[0].classList.add("text-white")
            }
        })
    })
   
    return (
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#about" className="hover:text-white">
                    <HomeIcon className="w-7 h-7 ml-1" />
             </a>
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#showcase" className="mr-5 hover:text-white">
              Showcases
            </a>
          </nav>
        </div>
      </header>
    );
  }

  


