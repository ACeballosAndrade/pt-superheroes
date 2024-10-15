import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

export function Footer() {
  return (
    <>
      <hr className="dotted mt-4 lg:w-[1060px] m-auto" />
      <div className="flex flex-col lg:flex-row lg:justify-between my-5 lg:w-[1060px] m-auto font-inter">
      <div>
        <ul className="flex flex-col lg:flex-row items-center text-sm gap-4 mt-2">
          <li>Términos y condiciones</li>
          <li>Política de tratamiento de datos</li>
          <li>Contáctenos</li>
        </ul>
      </div>
      <div className="flex items-center gap-2 flex-col lg:flex-row mt-2">
        <span className="text-slate-600 ">Siguenos</span>
        <div className="flex text-4xl gap-2">
          <IoLogoFacebook />
          <IoLogoTwitter />
        </div>
      </div>
    </div>
    </>
    
  );
}
