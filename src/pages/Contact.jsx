import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  
  const mailto = () => {
    window.location.href = "mailto: danish.devx3@gmail.com";
  };

  return (
    <div
      className="mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-3xl font-bold text-indigo-500 text-center"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 text-base font-medium text-center max-w-2xl leading-relaxed"
        >
          Have an exciting mobile or web project in mind? Let's bring it to life
          with cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className=""
        >


            <button onClick={mailto} className="bg-indigo-500 text-white text-base font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 transition duration-200">
              Get in Touch
            </button>
         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
