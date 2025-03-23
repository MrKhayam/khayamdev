import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
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


  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = `/files/resume.pdf`;
    link.download = "Khayam Ijaz | Frontend Developer.pdf"; // Specify the downloaded filename
    document.body.appendChild(link);
    link.click(); // Simulate a click
    document.body.removeChild(link); // Clean up
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
              I Turn Boring into Beautiful – <br className="md:block hidden" />{" "}
              You’ll Smile ‘Til Your Cheeks Hurt.
            </p>
            <div className="md:flex hidden flex-col text-[#7D90B7] gap-2 mt-20">
              <h1
                className={`cursor-pointer w-max transition-all duration-300 ${
                  activeSection === "about"
                    ? "text-white"
                    : "text-[#7D90B7] hover:text-white"
                }`}
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </h1>
              <h1
                className={`cursor-pointer w-max transition-all duration-300 ${
                  activeSection === "experience"
                    ? "text-white"
                    : "text-[#7D90B7] hover:text-white"
                }`}
                onClick={() => scrollToSection(experienceRef)}
              >
                Experience
              </h1>
              <h1
                className={`cursor-pointer w-max transition-all duration-300 ${
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
              You’re not alone—too many entrepreneurs watch their dreams drown
              in clunky, ugly sites that scare customers away. I’m{" "}
              <span className="text-white">Khayam Ijaz</span>, a frontend
              developer who’s here to end that nightmare once and for all. I
              craft websites that don’t just look good—they feel like a warm
              hug, load lightening—fast, and turn visitors into raving fans. No
              more stressing over broken designs or flaky freelancers who{" "}
              <span className="text-white">vanish</span> when you need them
              most. With me, you get pixel-perfect magic that fixes your
              problems and
              <span className="text-white"> boosts</span> your
              confidence—because you deserve a site that works as hard as you
              do.
              <br /> <br />
              Let’s talk about that sinking feeling when your site fails you.
              You’ve got a <span className="text-white">killer</span> idea, a
              hustle that won’t quit, but your online presence? It’s a ghost
              town. Visitors bounce <span className="text-white">faster</span>{" "}
              than a rubber ball, and every lost click feels like a punch to the
              gut. I’ve seen it, I get it, and I’m here to stop it cold. My
              frontend skills transform those digital disasters into sleek,
              seamless experiences that keep people{" "}
              <span className="text-white">hooked</span>. I’m not just
              coding—I’m building trust,{" "}
              <span className="text-white">saving</span> your sanity, and
              handing you a win you can feel in your bones.
              <br /> <br />
              What sets me apart? I don’t just slap code together and call it a
              day. I’m the guy who sweats the details—every button, every
              transition, every second of load time—so you don’t have to. While
              other developers leave you with half-baked{" "}
              <span className="text-white">messes</span> or excuses, I’m in your
              corner, <span className="text-white">obsessed</span> with making
              your vision pop off the screen. Need a site that’s gorgeous on
              mobile and desktop? Done. Want it to load so fast your competitors
              blink and miss it? Got you. I’m here to erase the “what-ifs” and
              replace them with <span className="text-white">"hell, yes".</span>
              <br /> <br />
              And here’s the kicker: I get the human side of this. You’re not
              just a client—you’re someone with a story, a dream, and a
              <span className="text-white"> deadline</span>. I bring a little
              humor, a lot of heart, and zero headaches to the table. No tech
              jargon to trip over, no ghosting mid-project—just a smooth ride
              from “ugh, my site sucks” to{" "}
              <span className="text-white">“wow, this is me!”</span> I’ve got
              your back, turning your insecurities about going online into
              confidence that screams, “I’ve arrived.” Your{" "}
              <span className="text-white">business</span> isn’t just surviving
              with me—it’s thriving.
              <br /> <br />
              So why keep settling for less? You’ve waited long enough for a
              website that matches your hustle and heart. I’m{" "}
              <span className="text-white">Khayam Ijaz</span>, and I’m ready to
              make your online world unstoppable. No more lost sales, no more
              embarrassment—just a frontend experience so hot, your audience
              won’t know what hit them. Let’s ditch the frustration and build
              something that converts like{" "}
              <span className="text-white">crazy</span>. Ready to stop settling
              and start shining? Hit me up, and let’s make it happen—today.
            </p>
          </div>

          {/* Experience Section */}
          <div ref={experienceRef}>
            <h1 className="mt-32 mb-10 text-white font-semibold block md:hidden">
              Experience
            </h1>
            <div className="flex md:mt-32 md:flex-row flex-col w-full min-h-50 gap-3 transition-all duration-300 cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="expLeft h-full md:w-[20%]">
                <p className="text-sm">2022 - Present</p>
              </div>
              <div className="expRight md:w-[80%] h-full">
                <h1 className="text-white font-medium">
                  Senior Front End Developer - Freelance
                </h1>
                <p className="md:mt-4 mt-2">
                  As a freelance Senior Front End Developer, I’ve partnered with
                  clients worldwide to transform their digital headaches into
                  standout successes. I specialize in crafting responsive,
                  high-performance websites that don’t just look pretty—they
                  drive results. From fixing sluggish load times to building
                  pixel-perfect interfaces, I’ve delivered custom solutions that
                  boost engagement and conversions. My toolkit? Clean code,
                  creative problem-solving, and a knack for turning “meh” into
                  “wow”—all while meeting tight deadlines and exceeding
                  expectations.
                </p>
                <div className="mt-4 flex flex-wrap w-full gap-2">
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    React Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Tailwind Css
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Framer Motion
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Javascript
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Redux Js
                  </h1>
                  <h1 className="rounded-full bg-[#54d4d423] px-4 text-[#53e4e4] py-1">
                    Node Js
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex md:mt-4 mt-8 md:flex-row flex-col w-full min-h-50 gap-3 transition-all duration-300 cursor-pointer hover:bg-[#b6b6b60c] border-t md:p-5 border-transparent hover:border-[#7c7c7c3a] rounded-md backdrop-blur-medium">
              <div className="expLeft h-full md:w-[20%]">
                <p className="text-sm">2023 - 2024</p>
              </div>
              <div className="expRight md:w-[80%] h-full">
                <h1 className="text-white font-medium">
                  Junior Front End Engineer, Internship - Creatobype
                </h1>
                <p className="md:mt-4 mt-2">
                  At Creatobype, I cut my teeth as a Junior Front End Engineer,
                  turning designs into functional websites with clean code.
                  Tackled UI tweaks, boosted site speed, and soaked up team
                  wisdom. My first step into frontend, delivering small wins
                  with big impact.
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
            <h1
              onClick={handleDownload}
              className="flex gap-4 cursor-pointer my-20 w-max rounded-full py-2 hover:bg-[#54d4d423] transition-all duration-300 px-6 hover:text-[#53e4e4] items-center"
            >
              View Full Resume <HiDownload />
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
