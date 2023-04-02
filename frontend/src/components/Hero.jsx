// import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center text-white bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 h-[400px] p-2 gap-3 ">
        <div className="left w-1/2">
          <div className="flex flex-col items-center justify-center gap-3 text-center ">
            <div className="two text-3xl font-semibold text-orange-500">
              Be a Coding Ninja
            </div>
            <div className="three md:text-lg">
              50,000 Students from 300 colleges have trusted us
            </div>
            <div className="four">
              <Link to="/create">
                <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br px-8 py-2 rounded-md shadow-lg shadow-orange-500/50">
                  Create Your Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right w-1/2 flex items-center justify-center">
          <img
            className="w-[400px] animate-pulse"
            src="https://files.codingninjas.in/438375-17407.webp"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
