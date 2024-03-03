import firstLawyer from "../../../assets/fotoPerfil.jpg";
import secondLawyer from "../../../assets/abogado.jpg";

const OurTeam = () => {
  return (
    <div className="lawyers-background bg-no-repeat bg-cover w-full relative text-white flex flex-col space-y-10 p-10 items-center md:items-start">
      <h2 className="text-3xl font-bold">Nuestro Equipo</h2>
      <p className="text-xl text-center">
        Talento, experiencia, dedicación y responsabilidad, nuestro compromiso
        con usted.
      </p>
      <div className="flex flex-col md:flex-row space-y-9 md:space-y-0 md:space-x-60">
        <div className="flex flex-col items-center">
          <img src={firstLawyer} alt="" className="h-56 md:h-80 rounded-md" />
          <p className="text-xl">Camilo García Sotelo</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={secondLawyer} alt="" className="h-56 md:h-80 rounded-md" />
          <p className="text-xl">Sebastián García Sotelo</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
