import { FaLinkedin, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8">Feel free to reach out for collaborations or any inquiries.</p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Your Name</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Your Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <p className="text-gray-400 mb-2">Or contact me directly:</p>
        <div className="flex space-x-6 md:flex-nowrap flex-wrap gap-6 md:mt-0 mt-4 md:gap-0">
          <a href="https://www.linkedin.com/in/mayank-saxena-419388239/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a href="mailto:mayanksaxena2214@gmail.com" className="hover:text-blue-400 flex items-center">
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a href="https://portfolio-router.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center">
            <FaGlobe className="mr-2" /> Portfolio
          </a>
          <p className="flex items-center text-gray-400">
            <FaPhone className="mr-2" /> 9259525543
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
