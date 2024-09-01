import logo from "../assets/logo.svg";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl min-w-full">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-6">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img src={logo} alt="" className="w-20 inline-block items-center" />{" "}
            <span className="text-white">Freenzei</span>
          </a>
          <p className="md:1/2 text-tartinary">
            Developing skills without diligence results in shallow and
            unsustainable progress. While you might gain knowledge, without
            consistent effort, those skills wont have the strength or resilience
            needed to stand the test of time.
          </p>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="bg-[#9a7af159] px-2 py-2 rounded-sm focus:outline-none"
            />
            <input
              type="submit"
              value="Subcribe"
              className="px-4 py-2 bg-secondary rounded-sm -md-2 cursor-pointer hover:bg-white hover:text-black transition duration-300"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-3">
            <h4 className="text-xl text-white">Platform</h4>
            <ul>
              <a href="/hero" className="block hover:text-gray-300 text-tartinary">
                Overviwe
              </a>
              <a href="/feature" className="block hover:text-gray-300 text-tartinary">
                Features
              </a>
              <a href="/about" className="block hover:text-gray-300 text-tartinary">
                About
              </a>
              <a href="/pricing" className="block hover:text-gray-300 text-tartinary">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl text-white">Help</h4>
            <ul>
              <a href="/" className="block hover:text-gray-300 text-tartinary">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300 text-tartinary">
                Where to ask question
              </a>
              <a href="/" className="block hover:text-gray-300 text-tartinary">
                How to play?
              </a>
              <a href="/" className="block hover:text-gray-300 text-tartinary">
                What is needed for this?
              </a>
            </ul>
          </div>{" "}
          <div className="space-y-6">
            <h4 className="text-xl text-white">Contact</h4>
            <ul>
              <p className="hover:text-gray-300 text-tartinary">+1 (555) 123-4567</p>
              <p className=" hover:text-gray-300 text-tartinary">1234 Elm Street</p>
              <p className=" hover:text-gray-300 text-tartinary">Springfield, IL</p>
              <p className=" hover:text-gray-300 text-tartinary">62704, USA</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="text-white flex flex-col sm:flex-row gap-8 sm:items-center justify-between mt-12 my-8">
        <p>&copy; Freenzei 2024 to {new Date().getFullYear()} | By Chirag Singh</p>
        <div className="flex items-center space-x-5" >
            <SiInstagram className="w-18 h-18 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
            <FaFacebookSquare className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
            <FaLinkedin className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
            <FaTwitterSquare className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
