import {
  FaSuitcase,
  FaPeopleGroup,
  FaGavel,
  FaNewspaper,
  FaStore,
  FaHandshake,
  FaBuilding,
  FaTruckRampBox,
  FaCoins,
  FaPiggyBank,
} from "react-icons/fa6";

const FirstSlide = () => {
  return (
    <div className="w-10/12 flex flex-col justify-center items-center space-y-5">
      <h3 className="text-3xl">Especialidades</h3>
      <hr className="w-full" />
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-5">
        <div className="flex flex-col justify-center items-center">
          <FaSuitcase size={70} />
          <p>Derecho Laboral</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaPeopleGroup size={70} />
          <p>Derecho de Familia</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaGavel size={70} />
          <p>Derecho Penal</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaNewspaper size={70} />
          <p>Derecho Constitucional</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaStore size={70} />
          <p>Derecho Comercial</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaHandshake size={70} />
          <p>Sociedades y Marcas</p>
        </div>
        <div className="hidden xl:flex flex-col justify-center items-center">
          <FaBuilding size={70} />
          <p>Derecho Civil</p>
        </div>
        <div className="hidden xl:flex flex-col justify-center items-center">
          <FaTruckRampBox size={70} />
          <p>Derecho Aduanero</p>
        </div>
        <div className="hidden xl:flex flex-col justify-center items-center">
          <FaCoins size={70} />
          <p>Derecho Tributario</p>
        </div>
        <div className="hidden xl:flex flex-col justify-center items-center">
          <FaPiggyBank size={70} />
          <p>Derecho Bancario</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
