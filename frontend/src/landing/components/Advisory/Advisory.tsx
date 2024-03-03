import pcImage from "../../../assets/pc.jpg";

const Advisory = () => {
  return (
    <div className="md:flex justify-center space-y-5 md:space-x-40 spa md:space-y-0 p-10 bg-indigo-50">
      <img src={pcImage} alt="" className=" h-64 rounded-md" />
      <div className="flex flex-col justify-center items-center md:items-start space-y-5">
        <h3 className="text-3xl">
          ¿Tienes un asunto legal y no sabes qué hacer?
        </h3>
        <div className="flex flex-col text-lg">
          <p>Asesorías Online/Presencial</p>
          <p>
            Te contactamos a través de una llamada telefónica o videollamada con
            un abogado desde $100.000.
          </p>
        </div>
        <button className="px-3 py-2 rounded-md bg-yellow-500 text-black hover:bg-amber-500">
          Reserva tu cita
        </button>
      </div>
    </div>
  );
};

export default Advisory;
