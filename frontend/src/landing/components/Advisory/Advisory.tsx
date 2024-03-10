import pcImage from "../../../assets/pc.jpg";
import Button from "../../../shared/Button";

const Advisory = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 lg:space-x-40 spa md:space-y-0 p-10 bg-indigo-50 text-custom-blue-800">
      <img src={pcImage} alt="Camilo García PC" className=" h-64 rounded-md" />
      <div className="flex flex-col justify-center items-center md:items-start space-y-5 text-center md:text-start">
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
        <Button
          content="Reserva tu cita"
          href="https://calendly.com/camilogarcia_abogados/serviciolegal?month=2024-03"
        />
      </div>
    </div>
  );
};

export default Advisory;
