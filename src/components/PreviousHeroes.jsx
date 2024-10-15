import { HiThumbUp, HiThumbDown } from "react-icons/hi";

export default function PreviousHeroes({name, pos, neg, img}) {
  return (
    <div 
      className={`font-inter flex items-end mx-5 lg:m-auto h-96 lg:min-w-[510px] lg:h-[600px] bg-cover bg-center`}
      style={{ backgroundImage: `url(${img})`}} 
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-white">
          <div className={`bg-${pos < neg ? `darkyellow` : `bluewater`} text-3xl p-1`}>
          {
                pos < neg
                ? <HiThumbDown/>
                :<HiThumbUp />
              }
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">{name}</h2>
        </div>
        <p className="text-white pl-10 text-sm lg:pr-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          quaerat dolores consequuntur!
        </p>
        <div className="flex gap-3 justify-between pl-10 text-white mr-2">
          <button className="border border-white px-9 py-1 lg:px-12 lg:py-0">Ver Más</button>
          <div className="text-sm w-24 text-right">1 mes atrás Lorem ipsum</div>
        </div>
        <div className="flex w-full lg:h-12 text-lg lg:text-3xl">
          <div className={`bg-bluewater bg-opacity-60 text-white flex items-center justify-start pl-3`}
            style={{width: `${pos}%`}}
          >
            <span className="flex items-center gap-2">
              <HiThumbUp />
              {pos}%
            </span>
          </div>
          <div className={`bg-darkyellow bg-opacity-60 text-white flex items-center justify-end pr-3`}
            style={{width: `${neg}%`}}
          >
            <span className="flex items-center gap-2">
              {neg}%
              <HiThumbDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
