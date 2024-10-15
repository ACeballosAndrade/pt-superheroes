import { useEffect, useState } from "react";
import { HiMenu, HiSearch, HiOutlineX } from "react-icons/hi";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleClick = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const content = (
    <>
      <ul className="fixed w-full mt-[77px] bg-black text-white flex flex-col gap-5 items-center font-inter text-lg pt-3 z-50">
        <li>
          <a href="#">Héroes Anteriores</a>
        </li>
        <li>
          <a href="#">¿Cómo funciona?</a>
        </li>
        <li>
          <a href="#">Iniciar Sesión</a>
        </li>
        <li>
          <button>
            <HiSearch />
          </button>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <div className={`fixed w-full flex justify-between px-6 lg:px-36 items-center text-white font-inter z-10 transition-colors duration-300 ${
          scrollPosition > 50 ? 'bg-black' : 'bg-transparent'
        }`}>
        <div className="w-28 lg:w-48 pt-7">
          <img
            src="https://res.cloudinary.com/dofxo1uga/image/upload/v1728829055/images/logo_htxptp.png"
            alt="Logo Awesome Heroes"
          />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-10 text-md items-center">
            <li>
              <a href="#">Héroes Anteriores</a>
            </li>
            <li>
              <a href="#">¿Cómo funciona?</a>
            </li>
            <li>
              <a href="#">Iniciar Sesión</a>
            </li>
            <li>
              <button>
                <HiSearch className="size-8" />
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="block sm:hidden transition text-3xl"
          onClick={handleClick}
        >
          {isOpen ? <HiOutlineX /> : <HiMenu />}
        </button>
      </div>
      <div>{isOpen && content}</div>
    </>
  );
}
