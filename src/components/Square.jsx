import { useState } from "react";
import { FaWikipediaW } from "react-icons/fa";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";

export function Square({ handleVote }) {
  const [isVoted, setIsVoted] = useState(false);
  const [vote, setVote] = useState(null);

  const handleUserVote = (isPositive) => {
    setVote(isPositive);
    handleVote(isPositive);
    setIsVoted(true);
  };

  const voted = (
    <>
      <div className="flex flex-col gap-2 px-3 pt-5 lg:px-9 lg:pt-8">
        <span className="text-white text-xl lg:text-4xl">
          Marvel - <strong>Ironman</strong>
        </span>
        <div className="text-white flex gap-3 lg:my-6">
          {vote ? (
            <div className="bg-bluewater w-12 h-12 flex items-center justify-center text-3xl lg:w-28 lg:h-28 lg:text-6xl">
              <HiThumbUp />
            </div>
          ) : (
            <div className="bg-darkyellow w-12 h-12 flex items-center justify-center text-3xl lg:w-28 lg:h-28 lg:text-6xl">
              <HiThumbDown />
            </div>
          )}
          <span className="text-[16px] lg:text-3xl lg:m-auto">
            ¡Tu voto ha sido registrado!
          </span>
        </div>
        <p className="text-slate-300 h-28 overflow-hidden text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi ipsa tenetur perferendis dicta nisi.
        </p>
        <button
          className="border border-white text-white w-44 px-4 py-2 m-auto bg-transparent hover:bg-white hover:text-black transition lg:mt-6"
          onClick={() => setIsVoted(false)}
        >
          &laquo; Volver a votar
        </button>
      </div>
    </>
  );

  const novoted = (
    <>
      <div className="flex flex-col gap-2 pl-2 lg:px-9 lg:pt-8">
        <span className="text-slate-300 text-[12px] lg:text-base">
          Dinos tu opinión sobre
        </span>
        <h1 className="text-white text-4xl lg:text-6xl">¿Ironman?</h1>
        <p className="text-slate-300 text-sm lg:mt-6 lg:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum explicabo, cumque facilis incidunt officia assumenda, magni iste ducimus eligendi ratione consequatur dolore nostrum officiis...
        </p>
        <div className="flex gap-2 text-slate-300 items-center">
          <FaWikipediaW />
          <a href="#" className="underline">
            Más Información
          </a>
        </div>
        <span className="text-white font-bold lg:text-xl mt-2">
          ¿Cuál es tu voto?
        </span>
      </div>
      <div className="flex w-full text-4xl lg:text-6xl text-white">
        <button
          className="bg-bluewater w-full h-14 lg:h-28 flex items-center justify-center"
          onClick={() => handleUserVote(true)}
        >
          <HiThumbUp />
        </button>
        <button
          className="bg-darkyellow w-full h-14 lg:h-28 flex items-center justify-center"
          onClick={() => handleUserVote(false)}
        >
          <HiThumbDown />
        </button>
      </div>
    </>
  );

  return (
    <div className="backdrop-blur-sm bg-black/30 absolute top-36 left-4 h-72 w-72 lg:w-[520px] lg: lg:left-36 lg:top-48 lg:h-[490px] font-inter flex flex-col justify-between">
      {isVoted ? voted : novoted}
    </div>
  );
}
