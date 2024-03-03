import ConsultanciesSteps from "./ConsultanciesSteps";

const ConsultanciesInfo = () => {
  return (
    <div className="consultancies-background bg-no-repeat bg-cover w-full relative text-white flex flex-col space-y-10 p-10 items-center md:items-start">
      <h2 className="text-3xl font-bold">Asesorías Jurídicas</h2>
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl">Consulta legal con abogados expertos</h4>
        <p>
          Realice su consulta legal con cualquiera de nuestras áreas de derecho
          familiar, comercial, penal, laboral, tributario o cualquier otro
          detalle de índole legal que desee aclarar. Nuestros abogados
          especialistas se encargarán de orientarlo acerca de su caso y así
          ofrecerle alternativas que pueda solucionar su dificultad.
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl">
          Consulta legal telefónica/videollamada $100.000 (IVA incluido)
        </h4>
        <p>
          Una vez confirmado este pago, procederemos a agendar su consulta y
          podrá contar con asesoría legal especializada por 60 minutos, vía
          telefónica o videollamada con nuestros contadores y abogados.
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl">
          Consulta legal presencial $130.000 (IVA incluido)
        </h4>
        <p>
          Al verificar el pago de este servicio, nuestro personal lo estará
          contactando para acordar la fecha de su reunión. La asesoría
          presencial tiene un tiempo de 60 minutos, recuerde que estamos
          ubicados en el municipio de Facatativá, Cundinamarca.
        </p>
      </div>
      <ConsultanciesSteps />
    </div>
  );
};

export default ConsultanciesInfo;
