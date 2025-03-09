import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5ae50378-f24d-43be-a179-9274392deedd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <section id="contact" className="min-h-screen py-20 px-16 bg-[#121212]">
        <div className="text-center mb-16">
          <h3 className="text-[#ff9999] text-2xl mb-4">Get In Touch</h3>
          <h2 className="text-white text-5xl font-bold underline">Contact Me</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-[#1e1e1e] p-8 rounded-xl shadow-lg">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#ff9999] text-lg mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required
                className="w-full px-4 py-3 rounded-lg bg-[#2d2d2d] text-white border border-gray-700 focus:border-[#00bfff] focus:outline-none transition-colors duration-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#ff9999] text-lg mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                required
                className="w-full px-4 py-3 rounded-lg bg-[#2d2d2d] text-white border border-gray-700 focus:border-[#00bfff] focus:outline-none transition-colors duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#ff9999] text-lg mb-2">Message</label>
              <textarea 
                name="message" 
                id="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-[#2d2d2d] text-white border border-gray-700 focus:border-[#00bfff] focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
  
            <button 
              type="submit"
              className="w-full py-3 px-6 bg-[#ff9999] hover:bg-[#ff7777] text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
  
            {result && (
              <div className={`text-center p-3 rounded-lg ${
                result === "Form Submitted Successfully"
                  ? "bg-green-500/20 text-green-500"
                  : "bg-red-500/20 text-red-500"
              }`}>
                {result}
              </div>
            )}
          </form>
        </div>
      </section>
    );
  }