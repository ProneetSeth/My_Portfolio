import {FaReact, FaCss3Alt,FaNodeJs} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript, SiMongodb, SiTailwindcss} from 'react-icons/si'


const Skills = () =>{
    return(
        <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
            <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                 Tech Stack I Use
            </p>
            <div className="flex flex-wrap justify-center pt-2 w-full">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaReact color='#2196f3' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-2xl sm:text-3xl font-semibold text-center hover:underline decoration-sky-600'>React.js</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color='#3490dc' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-2xl sm:text-3xl font-semibold text-center hover:underline decoration-blue-500'>Tailwind</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <AiFillHtml5 color='#f06529' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-2xl sm:text-3xl font-semibold text-center hover:underline decoration-orange-600'>HTML 5</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaCss3Alt color='#264de4' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-2xl sm:text-3xl font-semibold text-center hover:underline decoration-blue-500'>Css3</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript color='#F0DB4F' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-base sm:text-2xl font-semibold text-center hover:underline decoration-yellow-600'>JavaScript</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaNodeJs color='#3C873A' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-2xl sm:text-3xl font-semibold text-center hover:underline decoration-green-800'>Node.js</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiMongodb color='#4DB33D' className='mx-auto text-5xl hover:animate-bounce'/>
                    <p className='mt-6 text-base sm:text-2xl font-semibold text-center hover:underline decoration-green-600'>Mongo DB</p>
                </div>
                
            </div>
        </div>
    )
}

export default Skills