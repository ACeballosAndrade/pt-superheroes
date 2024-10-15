import { Square } from "./square";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";

export function Hero() {
  return (
    <div className="relative">
      <img
        src="https://res.cloudinary.com/dofxo1uga/image/upload/v1728829055/images/Iron-Man_zhqcs4.png"
        alt="Héroe ganador"
        className="w-full h-[500px] object-cover lg:h-[800px]"
      />
      <Square />
      <div className="flex w-full h-10 lg:h-16 absolute bottom-0 text-lg lg:text-5xl">
        <div className="bg-bluewater bg-opacity-60 w-full text-white flex items-center justify-end pr-3">
          <span className="flex items-center gap-2"><HiThumbUp/>88%</span>
        </div>
        <div className="bg-darkyellow bg-opacity-60 w-1/3 text-white flex items-center justify-start pl-3">
          <span className="flex items-center gap-2">12%<HiThumbDown/></span> 
        </div>
      </div>
    </div>
  );
}
