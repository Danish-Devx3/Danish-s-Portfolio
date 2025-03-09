import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-between px-16 py-20">
      <div className="relative w-[400px] h-[400px]">
        <div className="w-full h-full rounded-full border-4 border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-b-blue-500 rounded-full"></div>
          
          
          <img 
            src="/my-pic.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full p-2"
          />
        </div>
      </div>

      
      <div className="flex flex-col items-start space-y-6 max-w-xl">
        <h2 className="text-[#ff9999] text-2xl">Hello I'm</h2>
        <h1 className="text-white text-6xl font-bold">Danish Ansari</h1>
        <p className="text-[#ff9999] text-3xl">React Developer</p>
        
        
        <div className="flex gap-4 mt-6">
          <a href="https://drive.google.com/file/d/1rD9OEjOWMPnjvZFttHPS_Tf2sBAIMNyc/view?usp=drivesdk" target="_blank" className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors">
            Download CV
          </a>
          <a href='https://wa.me/917631625270?text=Hi%20Danish' target='_blank' className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
            Hire Me
          </a>
        </div>

        <div className="flex gap-4 mt-6">
          <a href="https://www.linkedin.com/in/danishansaridev/" target='_blank' className="text-[#0077b5] hover:text-[#00a0dc] transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Danish-Devx3" target='_blank' className="text-gray-300 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/Danish_Devx3" target='_blank' className="text-gray-300 hover:text-white transition-colors">
            <FaSquareXTwitter  size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 