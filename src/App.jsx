import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react"; // Corrected to framer-motion
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");

  // Refs for sections
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  // Detect when sections are in view
  const aboutInView = useInView(aboutRef, { margin: "-200px 0px -200px 0px" });
  const experienceInView = useInView(experienceRef, {
    margin: "-200px 0px -200px 0px",
  });
  const projectsInView = useInView(projectsRef, {
    margin: "-200px 0px -200px 0px",
  });

  // Mouse position tracking for glowing effect
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // Update active section based on what's in view
  useEffect(() => {
    if (projectsInView) {
      setActiveSection("projects");
    } else if (experienceInView) {
      setActiveSection("experience");
    } else if (aboutInView) {
      setActiveSection("about");
    }
  }, [aboutInView, experienceInView, projectsInView]);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 font-[Poppins]">
      {/* Glowing effect */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(17, 31, 68, 0.8) 0%, rgba(17, 31, 68, 0) 70%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          filter: "blur(40px)",
          boxShadow: "0 0 80px rgba(17, 31, 68, 0.6)",
          transform: `translate(${mousePosition.x - 300}px, ${
            mousePosition.y - 300
          }px)`,
        }}
      />

      <div className="z-10 w-full relative min-h-[100dvh] flex md:flex-row flex-col md:px-20 px-5 md:gap-10">
        <div className="left md:w-[40%] w-full md:h-full h-auto text-white md:py-20 py-10">
          <div className="w-full h-full md:fixed">
            <h1 className="md:text-6xl text-4xl font-semibold">Khayam Ijaz</h1>
            <h1 className="md:text-xl text-lg md:font-medium mt-3">
              Front End Developer
            </h1>
            <p className="md:mt-4 mt-2 text-[#7D90B7]">
              I build accessible, pixel-perfect digital{" "}
              <br className="md:block hidden" /> experiences for the web.
            </p>
            <div className="md:flex hidden flex-col text-[#7D90B7] gap-2 mt-20">
              <h1
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "about"
                    ? "text-white"
                    : "text-[#7D90B7] hover:text-white"
                }`}
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </h1>
              <h1
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "experience"
                    ? "text-white"
                    : "text-[#7D90B7] hover:text-white"
                }`}
                onClick={() => scrollToSection(experienceRef)}
              >
                Experience
              </h1>
              <h1
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "projects"
                    ? "text-white"
                    : "text-[#7D90B7] hover:text-white"
                }`}
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </h1>
            </div>
            <div className="icons flex gap-3 mt-5 md:mt-20 items-center">
              <div className="text-[#7D90B7] hover:text-white transition-colors duration-300 cursor-pointer">
                <FaGithub size={25} style={{ color: "inherit" }} />
              </div>
              <div className="text-[#7D90B7] hover:text-white transition-colors duration-300 cursor-pointer">
                <FaLinkedin size={25} style={{ color: "inherit" }} />
              </div>
              <div className="text-[#7D90B7] hover:text-white transition-colors duration-300 cursor-pointer">
                <FaInstagram size={25} style={{ color: "inherit" }} />
              </div>
            </div>
            <p className="text-[#7D90B7] text-sm mt-4">+923175080524</p>
            <p className="text-[#7D90B7] text-sm">ijazkhayam@gmail.com</p>
          </div>
        </div>
        <div className="right md:w-[60%] relative z-10 w-full md:h-full h-auto text-[#7D90B7] md:mt-20 mt-10 md:px-10">
          {/* About Section */}
          <div ref={aboutRef}>
            <h1 className="text-white md:hidden block font-semibold py-3">
              About
            </h1>
            <p>
              About I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.{" "}
              <br /> <br />
              Currently, I'm a Senior Front-End Engineer at Klaviyo,
              specializing in accessibility. I contribute to the creation and
              maintenance of UI components that power{" "}
              <span className="text-white">Klaviyo’s</span> frontend, ensuring
              our platform meets web accessibility standards and best practices
              to deliver an inclusive user experience. <br /> <br />
              In the past, I've had the opportunity to develop software across a
              variety of settings — from{" "}
              <span className="text-white">advertising agencies</span> and{" "}
              <span className="text-white">large corporation</span> to start-ups
              and small digital product studios. Additionally, I also released a
              comprehensive video course a few years ago, guiding learners
              through building a web app with the Spotify API. <br /> <br />
              In my spare time, I’m usually climbing, reading, hanging out with
              my wife and two cats, or running around Hyrule searching for Korok
              seeds <span className="text-white">K o r o k s e e d s .</span>.
            </p>
          </div>

          {/* Experience Section */}
          <div ref={experienceRef}>
            <h1 className="mt-32 mb-10 text-white font-semibold block md:hidden">
              Experience
            </h1>
            <div className="flex md:mt-32 md:flex-row flex-col w-full min-h-50 gap-3 transition-all duration-300 cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="expLeft h-full md:w-[20%]">
                <p className="text-sm">2021 - Present</p>
              </div>
              <div className="expRight md:w-[80%] h-full">
                <h1 className="text-white font-medium">
                  Senior Front End Engineer, Accessibility - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  I contribute to the creation and maintenance of UI components
                  that power Klaviyo’s frontend, ensuring our platform meets web
                  accessibility standards and best practices to deliver an
                  inclusive user experience.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    HTML
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex md:mt-4 mt-8 md:flex-row flex-col w-full min-h-50 gap-3 transition-all duration-300 cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="expLeft h-full md:w-[20%]">
                <p className="text-sm">2021 - Present</p>
              </div>
              <div className="expRight md:w-[80%] h-full">
                <h1 className="text-white font-medium">
                  Senior Front End Engineer, Accessibility - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  I contribute to the creation and maintenance of UI components
                  that power Klaviyo’s frontend, ensuring our platform meets web
                  accessibility standards and best practices to deliver an
                  inclusive user experience.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    HTML
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex md:mt-4 mt-8 mb-3 md:flex-row flex-col w-full min-h-50 gap-3 transition-all duration-300 cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="expLeft h-full md:w-[20%]">
                <p className="text-sm">2021 - Present</p>
              </div>
              <div className="expRight md:w-[80%] h-full">
                <h1 className="text-white font-medium">
                  Senior Front End Engineer, Accessibility - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  I contribute to the creation and maintenance of UI components
                  that power Klaviyo’s frontend, ensuring our platform meets web
                  accessibility standards and best practices to deliver an
                  inclusive user experience.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    HTML
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="flex gap-4 cursor-pointer my-20 w-max rounded-full py-2 hover:bg-[#54d4d423] transition-all duration-300 px-6 hover:text-[#53e4e4] items-center">
              View Full Resume <FaLongArrowAltRight />
            </h1>
          </div>

          {/* Projects Section */}
          <div ref={projectsRef}>
            <h1 className="text-white font-semibold md:hidden block my-5">
              Projects
            </h1>
            <div className="Proj flex md:mt-4 mt-8 mb-3 flex-col w-full min-h-50 gap-3 transition-all duration-300 items-center cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="projTop w-full md:h-72 h-44">
                <img
                  className="w-full h-full rounded-md"
                  src="https://xultechng.com/home/image/solutions/ui-ux.webp"
                  alt=""
                />
              </div>
              <div className="expRight md:w-full h-full">
                <h1 className="text-white md:text-3xl text-xl font-medium">
                  Senior Front End Engineer, Accessibility - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  I contribute to the creation and maintenance of UI components
                  that power Klaviyo’s frontend, ensuring our platform meets web
                  accessibility standards and best practices to deliver an
                  inclusive user experience.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    HTML
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button className="mt-7 self-end flex gap-1 rounded-full py-2 hover:bg-[#54d4d423] transition-all duration-300 px-6 hover:text-[#53e4e4] items-center cursor-pointer">
                    View Now <GoArrowUpRight size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="Proj flex md:mt-4 mt-8 mb-3 flex-col w-full min-h-50 gap-3 transition-all duration-300 items-center cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="projTop w-full md:h-72 h-44">
                <img
                  className="w-full h-full rounded-md"
                  src="https://xultechng.com/home/image/solutions/ui-ux.webp"
                  alt=""
                />
              </div>
              <div className="expRight md:w-full h-full">
                <h1 className="text-white md:text-3xl text-xl font-medium">
                  Senior Front End Engineer, Accessibility - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  I contribute to the creation and maintenance of UI components
                  that power Klaviyo’s frontend, ensuring our platform meets web
                  accessibility standards and best practices to deliver an
                  inclusive user experience.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    HTML
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button className="mt-7 self-end flex gap-1 rounded-full py-2 hover:bg-[#54d4d423] transition-all duration-300 px-6 hover:text-[#53e4e4] items-center cursor-pointer">
                    View Now <GoArrowUpRight size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="Proj flex md:mt-4 mt-8 mb-3 flex-col w-full min-h-50 gap-3 transition-all duration-300 items-center cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="projTop w-full md:h-72 h-44">
                <img
                  className="w-full h-full rounded-md"
                  src="https://xultechng.com/home/image/solutions/ui-ux.webp"
                  alt=""
                />
              </div>
              <div className="expRight md:w-full h-full">
                <h1 className="text-white md:text-3xl text-xl font-medium">
                  Senior Front End Engineer, Accessibility - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  I contribute to the creation and maintenance of UI components
                  that power Klaviyo’s frontend, ensuring our platform meets web
                  accessibility standards and best practices to deliver an
                  inclusive user experience.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    HTML
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button className="mt-7 self-end flex gap-1 rounded-full py-2 hover:bg-[#54d4d423] transition-all duration-300 px-6 hover:text-[#53e4e4] items-center cursor-pointer">
                    View Now <GoArrowUpRight size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-center my-10">Khayam Ijaz | 2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
