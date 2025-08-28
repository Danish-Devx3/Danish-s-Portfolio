import React from "react";
import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { DownloadButton } from "../components/buttons";
import { TextShine } from "../components/texts";

const About = () => {
  return (
    <div
      className="max-w-7xl mx-auto min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-5"
        >
            <span className="px-2 py-1 text-white bg-[#5a5959b0] rounded-full text-xs md:text-sm">Open to hire</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left bg-gradient-to-r from-blue-600 via-sky to-blue-400 text-transparent bg-clip-text">Danish Ansari</h1>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-400 via-sky to-blue-600 text-transparent bg-clip-text"><TextShine text={"Web Developer"}/></h3>

            <p className="text-sm text-slate-600 text-center md:text-left text-pretty leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptates id non vero sunt reprehenderit ipsum, quisquam ipsam temporibus quibusdam praesentium cumque consectetur, modi doloremque aperiam cum aliquam adipisci, veniam quasi distinctio illo?</p>

            <div className="flex gap-10 mt-3 items-center">
                <div className="flex gap-5">
                  <BiLogoGithub className="text-2xl md:text-3xl text-neutral-600 cursor-pointer hover:scale-110 hover:text-black hover:rotate-12 transition-all duration-300"/>
                <BiLogoLinkedin className="text-2xl md:text-3xl text-neutral-600 cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300"/>
                <BiLogoTwitter className="text-2xl md:text-3xl text-neutral-600 cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300"/>
                </div>
                <button className="rounded-lg text-lg font-light "><DownloadButton /></button>
            </div>
        </motion.div>
        <img src="https://avatars.githubusercontent.com/u/183054297?v=4" alt="" className="w-[250px] md:w-[350px] rounded-full hover:shadow-2xl hover:shadow-blue-800 hover:scale-105 hover:rotate-2 transition-all duration-500"/>
      </motion.div>
    </div>
  );
};

export default About;
