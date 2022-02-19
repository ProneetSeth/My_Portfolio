import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa';

const About = () =>{
    return(
        <div className="max-w-4xl mt-20 mx-auto w-full">
            <p className="text-2xl text-black md:text-4xl font-bold text-center animate-bounce drop-shadow-lg hover:text-indigo-600">
                Hello There! 👋
            </p>
            <p className="text-base md:text-2xl text-center text-gray-600 mt-4 hover:text-gray-800 drop-shadow-md">
                I'm a <a className="hover:underline decoration-pink-400">Web and React-JS developer.</a> I love to play around different Web technologies. I also love to do freelancing. I have worked for <a className="hover:underline decoration-sky-500">L&T Tech Services</a> and <a className="hover:underline decoration-sky-500">Playment</a> as <a className="hover:underline decoration-red-400">ADAS Engineer.</a> 
            </p>
            <div className='flex flex-wrap justify-center pt-6'>
                <button className='mt-3 inline-block w-auto font-display text-white text-xl font-semibold md:text-2xl py-2 px-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ... hover:underline decoration-green-400'>
                    <a href='https://drive.google.com/file/d/1c32OfRYH2LJ_Wp803YWdxs7DxsTbnqBI/view?usp=sharing'>My Resume</a>
                </button>
            </div>
            
            <ScrollIntoView selector='#tech'>
                <div className='mx-auto p-20'>
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-600'></FaChevronDown>

                </div>

            </ScrollIntoView>

        </div>
    )
}

export default About