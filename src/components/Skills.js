import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "./Config";

export default function Skills() {
  return (
    <section id="skills">
        <br className="hidden lg:inline-block" />
        <br className="hidden lg:inline-block" />
        <br className="hidden lg:inline-block" />
        <br className="hidden lg:inline-block" />
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="container mx-auto">
            <div className="flex space-x-10 lg:w-4/5 sm:mx-auto sm:mb-3 -mx-3">
            {skills.map((skill) => (
                <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex-col p-4 h-full items-center">
                        <span className="sm:text-2xl text-2xl font-medium title-font text-white mb-2">{skill.role}</span>
                    {skill.skills.map((item,idx) => {
                        return (
                            <span className="flex" key={idx}>
                                <BadgeCheckIcon className="text-green-400 w-4 h-4 mr-4" />
                                <span className="title-font font-small">
                                    {item}
                                </span>
                            </span>
                        )
                    })}
                    </div>
                
                </div>
            ))}
            </div>
        </div>
      </div>
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