import LinkedIn from "./images/LinkedIn.png";
import GitHub from "./images/GitHub.png";
import Email from "./images/Email.png";
import Resume from "./images/Resume.png";
import ResumePDF from "./images/Resume.pdf";
import amethyst from "./images/amethyst.png";
import bulletproofPerformance from "./images/bulletproofPerformance.png";
import BCNDPResume from "./images/NDPresume.png";
import { useRef } from 'react';

function App() {
  const Mailto = ({email, subject = '', body = '', children}) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject${encodeURIComponent(subject)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  }

  const introRef = useRef();
  const aboutRef = useRef();
  const eduRef = useRef();
  const techRef = useRef();
  const hireRef = useRef();
  const projectRef = useRef();
  const referencesRef = useRef();
  const conclusionRef = useRef();
  return (
    <div className="bg-zinc-800 ">
       <div>
        <div className="lg:px-56 pt-8 lg:absolute lg:right-[500px] lg:top-32">
          <div className="lg:fixed">
            <button onClick={() => {
              introRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold" >
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-60px] lg:ml-[-80px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-[-30px] lg:ml-[-10px] font-glegoo">Introduction</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-12">
            <button className="" onClick={() => {
              aboutRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-50px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl lg:ml-4 font-glegoo">About Me</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-[105px]">
            <button onClick={() => {
              eduRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-50px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-[-10px] lg:ml-2 font-glegoo">Education</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-[160px]">
            <button onClick={() => {
              techRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-50px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-[-15px] lg:ml-2 font-glegoo">Tech Stack</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-[215px]">
            <button onClick={() => {
              hireRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-40px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-3 lg:ml-2 font-glegoo">Hire Me</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-[270px]">
            <button onClick={() => {
              projectRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-43px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-3 lg:ml-2 font-glegoo">Projects</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-[325px]">
            <button onClick={() => {
              referencesRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-50px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-[-20px] lg:ml-2 font-glegoo">References</h2>
              </div>
            </button>
          </div>
          <div className="lg:fixed lg:mt-[380px]">
            <button onClick={() => {
              conclusionRef.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              <div className="group grid grid-cols-3 hover:font-bold pt-2">
                <div className="bg-zinc-800 group-hover:bg-sky-700 w-10 transform transition duration-500 rounded-full">
                  <div class="flex flex-row justify-center items-center w-10 h-10 border border-1 border-black rounded-full">
                    <div class="w-5 h-5 border border-1 border-black rounded-full" />
                  </div>
                </div>
                <hr className="h-px mt-5 w-32 lg:w-48 ml-[-50px] lg:ml-[-65px] bg-black border-0" />
                <h2 className="text-white text-2xl ml-[-20px] lg:ml-2 font-glegoo">Conclusion</h2>
              </div>
            </button>
          </div> 
          <div className="lg:fixed lg:mt-[450px]">
            <div className="grid grid-cols-4 mt-10">
              <a href="https://www.linkedin.com/in/mackthaxter/" target="_blank">
                <img src={LinkedIn} alt="LinkedIn" className="w-16" />
              </a>
              <a className="lg:mr-16" href="https://github.com/Sniffin3083" target="_blank">
                <img src={GitHub} alt="GitHub" className="w-16" />
              </a>
              <Mailto email="thaxterg12@gmail.com" subject="Jr. Web Developer Position" body="">
                <img src={Email} alt="Email" className="w-16" />
              </Mailto>
              <a href={ResumePDF} target="_blank">
                <img src={Resume} alt="Resume" className="w-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-16 pt-12">
        <div ref={introRef} id="intro">
          <h1 className="text-orange-500 font-bold text-5xl font-inter">Hi NDP Party of BC</h1>
          <p className="mt-8 pr-24 w-screen lg:w-1/2 text-white font-medium text-xl font-inter">I wanted to stand out with my resume so, I decided to turn it into a website for you to navigate. I have also included a download link to a proper resume at the bottom of the navigation menu. I hope you enjoy learning more about me and my skill set. If you have any questions at all, feel free to reach out at any time.</p>
        </div>
        <div ref={aboutRef} id="about" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">About Me</h2>
          <p className="mt-8 pr-24 w-screen lg:w-1/2 text-white font-medium text-xl font-inter">Hi my name is Griffin, but I prefer Mack. I am an aspiring Software/Web Developer and have been passionate about the field ever since I was little kid trying to make simple programs on my dad's computer. I have a diverse tech stack and I am always willing to jump on to new tasks, acquiring new skills along the way. You can learn more about my experience and education below.</p>
        </div>
        <div ref={eduRef} id="education" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">Education</h2>
          <p className="mt-8 pr-24 w-screen lg:w-1/2 text-white font-medium text-xl font-inter">I attended the Southern Alberta Institute of Technology better known as SAIT. I spent two years there honing my skills as a developer in multiple different areas. I had a focus on Web Development, Object Oriented Development, and SQL Database design and administration. I graduated with a diploma in Information Technology majoring in Software Development. I also had to develop a Capstone Project in my final semester which you can find linked in the projects section.</p>
        </div>
        <div ref={techRef} id="tech" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">Tech Stack</h2>
          <table className="ml-[-30px] lg:ml-12 mt-8 text-white font-medium text-lg lg:text-xl font-inter">
            <thead>
              <th>Languages</th>
              <th className="px-5 lg:px-36">Frameworks</th>
              <th>Tools</th>
            </thead>
            <tbody>
              <td>
                <ul className="list-disc">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>PL/SQL</li>
                  <li>JSON</li>
                </ul>
              </td>
              <td className="px-5 lg:px-36">
                <ul className="list-disc">
                  <li>React</li>
                  <li>Node.JS</li>
                  <li>Express</li>
                  <li>TailwindCSS</li>
                  <li>BootStrap</li>
                  <li>NextJS</li>
                </ul>
              </td>
              <td className="pl-3 lg:pl-8">
                <ul className="list-disc">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>AWS</li>
                  <li>Figma</li>
                </ul>
              </td>
            </tbody>
          </table>
        </div>
        <div ref={hireRef} id="hire" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">Hire Me</h2>
          <p className="mt-8 pr-24 w-screen lg:w-1/2 text-white font-medium text-xl font-inter">Although I lack professional experience, I have a can do attitude and a willingness to learn on the job. I am an easily adaptable person to any kind of situation and I feel as I would be an outstanding addition to your team!</p>
        </div>
        <div ref={projectRef} id="projects" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">Projects</h2>
          <div className="lg:grid lg:grid-cols-3 mt-8">
            <a href="https://github.com/Sniffin3083/bc-ndp-resume" target="_blank">
              <img className="w-56 scale-100 hover:scale-125 transform transition duration-500 border border-solid border-black blur-sm hover:blur-none" src={BCNDPResume} alt="BC NDP Resume" />
              <h2 className="text-white font-glegoo text-lg mt-5 font-bold">Resume for BC NDP</h2>
              <figcaption className="text-white w-56">The code base for this very site if you are interested in looking at the code.</figcaption>
            </a>
            <a className="mx-[-300px]" href="https://bulletproofperformance.ca/" target="_blank">
              <img className="w-56 scale-100 hover:scale-125 transform transition duration-500 border border-solid border-black blur-sm hover:blur-none" src={bulletproofPerformance} alt="Bulletproof Performance Web App" />
              <h2 className="w-56 text-white font-glegoo text-lg mt-5 font-bold">Web App for Bulletproof Performance</h2>
              <figcaption className="text-white w-56">My capstone project from when I was attending SAIT. I cannot provide the source code but I hope that you enjoy looking around!</figcaption>
            </a>
            <a className="ml-[-600px]" href="https://github.com/Sniffin3083/amethyst-dreams" target="_blank">
              <img className="w-56 scale-100 hover:scale-125 transform transition duration-500 border border-solid border-black blur-sm hover:blur-none" src={amethyst} alt="Amethyst Dreams" />
              <h2 className="w-56 text-white font-glegoo text-lg mt-5 font-bold">Amethyst Dreams</h2>
              <figcaption className="text-white w-56">A VSCode theme that I made about a year ago.</figcaption>
            </a>
          </div>
        </div>
        <div ref={referencesRef} id="references" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">References</h2>
          <div className="mt-8 lg:grid lg:grid-cols-3">
            <div>
              <h2 className="font-glegoo text-2xl text-white font-bold">Brett Williamson</h2>
              <p className="text-white text-lg font-inter ml-6">Previous Manager</p>
              <p className="text-white text-md font-inter">bwilliamson@calgarycoop.com</p>
              <p className="text-white text-md font-inter ml-6">Cell: 403-870-51190</p>
              <p className="text-white text-md font-inter">Work: 403-299-4289 ext. 406</p>
            </div>
            <div className="ml-[-300px]">
              <h2 className="font-glegoo text-2xl text-white font-bold">Javan Neves</h2>
              <p className="text-white text-lg font-inter ml-1">Previous Manager</p>
              <p className="text-white text-md font-inter ml-[-12px]">jneves@calgarycoop.com</p>
              <p className="text-white text-md font-inter">Cell: +1 204-266-3042</p>
              <p className="text-white text-md font-inter ml-[-12px]">Work: 403-934-2928 ext. 406</p>
            </div>
            <div className="ml-[-625px]">
              <h2 className="font-glegoo text-2xl text-white font-bold">3rd reference</h2>
              <p className="text-white text-lg font-inter ml-1">role</p>
              <p className="text-white text-md font-inter ml-[-12px]">email</p>
              <p className="text-white text-md font-inter">Cell:</p>
              <p className="text-white text-md font-inter ml-[-12px]">Work: </p>
            </div>
          </div>
        </div>
        <div ref={conclusionRef} id="conclusion" className="mt-36">
          <h2 className="lg:ml-64 text-4xl font-glegoo text-white font-bold">Conclusion</h2>
          <p className="mt-8 pr-24 w-screen lg:w-1/2 text-white font-medium text-xl font-inter">In conclusion, I think I would an asset to your party. I bring lots of spirit and a good attitude to go along with it. If you have any questions don’t be afraid to reach out to me at anytime. Thank you, and I hope to hear from you soon!</p>
        </div>
      </div> 
      <div className="py-36 mx-16 lg:mx-56">
        <p className="font-glegoo text-white text-4xl">Thank you for reading,</p>  
      </div> 
      <div className="pb-36 mx-16 lg:mx-72">
        <p className="font-cursive text-white text-4xl">Mack Thaxter</p>
      </div>
    </div>
  );
}

export default App;
