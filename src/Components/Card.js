import React from "react"
import profile from "../Images/coder3.jpeg"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram  } from "react-icons/fa"
// import img1 from "./Images/img1.jpg"  styles={{ backgroundImage:`url(${img1})`}}
import Particles from "react-tsparticles";

const Card = () => {
    //adding particle
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
        <div className="w-full min-h-full" >
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                    
                  },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 200,
                      duration: 2,
                      opacity: 0.4,
                      size: 10,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 250,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#00FFFF",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 40,
                    enable: false,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 3,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 1200,
                    },
                    value: 50,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: false,
              }}
            />
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 drop-shadow-sm">
                <div className="">
                    <img className="w-32 h-32  mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
                        Proneet Kumar Seth
                    </p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Frontend Developer
                    </p>
                    <div className="flex align-center justify-center mt-4">
                        <a className="text-xl m-1 p-1 text-gray-700 hover:bg-gray-700 rounded-full hover:text-white transition-colors duration-300"  href="https://github.com/ProneetSeth">
                            <FaGithub />
                        </a>
                        <a className="text-xl m-1 p-1 text-blue-700 hover:bg-cyan-500 rounded-full hover:text-white transition-colors duration-300"  href="https://in.linkedin.com/in/proneet-kumar-seth-a09514116">
                            <FaLinkedin />
                        </a>
                        <a className="text-xl m-1 p-1 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"  href="https://mobile.twitter.com/sethproneet">
                            <FaTwitter />
                        </a>
                        <a className="text-xl m-1 p-1 text-red-600 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"  href="https://www.instagram.com/proneet.1111_official/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card