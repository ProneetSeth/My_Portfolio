import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="py-5 border-t-3/2 ">
            <div className="flex justify-center mt-4">
                <a className="text-xl m-1 p-1 text-gray-700 hover:bg-gray-700 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/ProneetSeth">
                    <FaGithub />
                </a>
                <a className="text-xl m-1 p-1 text-blue-700 hover:bg-cyan-500 rounded-full hover:text-white transition-colors duration-300" href="https://in.linkedin.com/in/proneet-kumar-seth-a09514116">
                    <FaLinkedin />
                </a>
                <a className="text-xl m-1 p-1 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://mobile.twitter.com/sethproneet">
                    <FaTwitter />
                </a>
                <a className="text-xl m-1 p-1 text-red-600 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/proneet.1111_official/">
                    <FaInstagram />
                </a>
            </div>
            <div className="flex justify-center mt-4">
                <p className="text-black mb-4">
                    Made from <span className="mr-2" role="link" aria-label="heart">❤️</span>by <a className="text-blue-800 font-semibold hover:underline drop-shadow-lg" href="mailto:me.proneetofficial111@gmail.com">Proneet Kumar Seth</a>
                </p>
            </div>
        </div>
    )
}
export default Footer