import phoneImage from "../../../assets/celular.jpg";

const Appointment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-10 justify-center md:space-x-10 space-y-5 md:space-y-0 bg-blue-950 text-indigo-50">
      <img
        src={phoneImage}
        alt="Camilo García Celular"
        className="h-64 rounded-md"
      />
      <div className="flex flex-col justify-center space-y-5 text-center md:text-start">
        <div className="flex flex-col text-lg space-y-3">
          <h3 className="text-3xl">¿Cómo agendar o programar una cita?</h3>
          <p>
            Para programar una consulta solo debes ingresar a nuestra web
            mediante este{" "}
            <a
              href="https://calendly.com/camilogarcia_abogados/serviciolegal?month=2024-03"
              target="_blank"
              className="text-yellow-400"
            >
              Enlace
            </a>{" "}
            o a traves de nuestro WhatsApp.
          </p>
        </div>
        <div className="flex flex-col text-lg space-y-3">
          <h3 className="text-3xl">¿Cómo funciona el servicio?</h3>
          <p>
            La consulta se realiza a través de una videollamada o llamada
            telefónica al celular indicado en la consulta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
