import {FaArrowRight} from "react-icons/fa"

const Contactus = () => {
    return (
        <div>
            <div className="max-w-lg w-full text-center m-auto pt-36 pb-4">
                <h1 className=" sm:text-4xl text-base hover:bg-gradient-to-r from-indigo-500 via-blue-200 to-blue-300 ... hover:text-white  rounded-md">
                    Interested in Working Together?
                </h1>
            </div>
            <div className="max-w-2xl mx-auto justify-center py-6 flex flex-auto">
                <form className="justify-center">
                    <label className="block pb-6">
                        <span className="block text-sm font-medium text-slate-700">Your Name</span>
                        <input type="text"   className="mt-1 block w-80 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500" placeholder="Your Good Name"/>
                    </label>
                    <label class="block">
                        <span className="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                        <input type="email"  className="peer ... mt-1 block w-80 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:border-sky-500 focus:outline-none" placeholder="name@mail.com"/>
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                        </p>
                    </label>
                </form>
            </div>
            <div className="max-w-lg w-full text-center m-auto pb-6">
                <a href="mailto:me.officialproneet@gmail.com">
                    <span className="mt-3 inline-block w-auto bg-cyan-500 font-display text-white text-base md:text-xl py-3 px-3 cursor-pointer rounded-lg">
                        <div className="flex flex-row items-center">
                            <span className="mr-3">Get In Touch</span>
                            <FaArrowRight color="white"/>

                        </div>

                    </span>
                </a>
            </div>
        </div>
    )
}

export default Contactus