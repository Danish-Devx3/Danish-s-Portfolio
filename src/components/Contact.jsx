import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
          transition={{ duration: 0.5, delay: 0.2}}
        >
          Contact Me
        </motion.h1>

        <motion.p
         initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3}}
          className="text-gray-300 text-lg text-center max-w-2xl leading-relaxed"
        >
          Have an exciting mobile or web project in mind? Let's bring it to life with cutting-edge technology.
        </motion.p>

        <button></button>
      </motion.div>
    </div>
  );
};

export default Contact;
