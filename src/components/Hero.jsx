import { useState, useEffect } from "react";
import { Square } from "./Square";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";

export function Hero() {
  const [votes, setVotes] = useState({ positive: 0, negative: 0 });
  const [totalVotes, setTotalVotes] = useState(0);

  // Cargar votos desde localStorage cuando el componente se monte
  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem('votes')) || { positive: 0, negative: 0 };
    setVotes(savedVotes);
    setTotalVotes(savedVotes.positive + savedVotes.negative);
  }, []); // Solo se ejecuta una vez al montar el componente

  // Guardar votos en localStorage cuando los votos cambien
  useEffect(() => {
    if (totalVotes > 0) { // Solo guardamos si ya hubo algún voto
      localStorage.setItem('votes', JSON.stringify(votes));
    }
  }, [votes]); // Se ejecuta cada vez que los votos cambian

  // Función para manejar la votación
  const handleVote = (isPositive) => {
    setVotes((prevVotes) => {
      const newVotes = {
        ...prevVotes,
        positive: isPositive ? prevVotes.positive + 1 : prevVotes.positive,
        negative: !isPositive ? prevVotes.negative + 1 : prevVotes.negative,
      };
      setTotalVotes(newVotes.positive + newVotes.negative);
      return newVotes;
    });
  };

  // Calcular los porcentajes
  const porcentajePositivo = totalVotes > 0 ? (votes.positive / totalVotes) * 100 : 50;
  const porcentajeNegativo = totalVotes > 0 ? (votes.negative / totalVotes) * 100 : 50;

  return (
    <div className="relative">
      <img
        src="https://res.cloudinary.com/dofxo1uga/image/upload/v1728829055/images/Iron-Man_zhqcs4.png"
        alt="Héroe ganador"
        className="w-full h-[500px] object-cover lg:h-[800px]"
      />
      <Square handleVote={handleVote} />
      <div className="flex w-full h-10 lg:h-16 absolute bottom-0 text-lg lg:text-5xl">
        <div
          className="bg-bluewater bg-opacity-60 text-white flex items-center justify-end pr-3"
          style={{ width: `${porcentajePositivo}%` }}
        >
          <span className="flex items-center gap-2">
            <HiThumbUp />
            {porcentajePositivo.toFixed(1)}%
          </span>
        </div>
        <div
          className="bg-darkyellow bg-opacity-60 text-white flex items-center justify-start pl-3"
          style={{ width: `${porcentajeNegativo}%` }}
        >
          <span className="flex items-center gap-2">
            {porcentajeNegativo.toFixed(1)}% <HiThumbDown />
          </span>
        </div>
      </div>
    </div>
  );
}
