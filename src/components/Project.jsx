import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';

const Project = ({project}) => {
  return (
    <>
      <div className="Proj flex md:mt-4 mt-8 mb-3 flex-col w-full min-h-50 gap-3 transition-all duration-300 items-center cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
        <div className="projTop w-full md:h-72 h-44">
          <img
            className="w-full h-full rounded-md border-t shadow-lg border-[#7c7c7c3a]"
            src={project.image}
            alt=""
          />
        </div>
        <div className="expRight md:w-full h-full">
          <h1 className="text-white md:text-3xl text-xl font-medium">
            {project.title}
          </h1>
          <p className="md:mt-4 mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap w-full gap-2">
            {project.skills.map((skill, index) => (
              <h1
                key={index}
                className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1"
              >
                {skill}
              </h1>
            ))}
          </div>
          <div className="w-full flex items-center justify-end">
            <a href={project.link} target='_blank'>
              <button className="mt-7 self-end flex gap-1 rounded-full py-2 hover:bg-[#54d4d423] transition-all duration-300 px-6 hover:text-[#53e4e4] items-center cursor-pointer">
                View Now <GoArrowUpRight size={25} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
