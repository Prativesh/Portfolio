import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl lg:max-w-[45vw]">
          Get in <span className="text-purple">touch</span>
        </h1>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center gap-10">
          {socialMedia.map((info) => (
            <a href={info.link} target="_blank" key={info.id}>
              <div className="relative w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 group">
                <img src={info.img} alt="icons" width={20} height={20} />

                <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm max-w-20 text-white bg-black-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {info.hoverText}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
