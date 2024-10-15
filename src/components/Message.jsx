import { IoCloseOutline } from "react-icons/io5";

export default function Message() {
  return (
    <div className="lg:flex font-inter bg-slate-200 w-[333px] m-auto my-4 lg:w-[1060px]">
      <div className="flex flex-col px-4 py-4 lg:pl-8 lg:pr-0 lg:w-[500px]">
        <span className="lg:text-xl text-slate-700">
          Lorem, ipsum dolor.
        </span>
        <span className="text-lg lg:text-4xl font-bold text-slate-800">
          IP lorem ip.
        </span>
      </div>
      <div className="px-4 pb-4 flex items-center ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium quod aliquam odit ducimus voluptatem nostrum sequi libero? Aperiam cum consectetur est? Praesentium.</p>
      </div>
      <div className="text-4xl lg:flex items-center pr-4 text-zinc-700 hidden">
        <IoCloseOutline/>
      </div>
    </div>
  )
}
