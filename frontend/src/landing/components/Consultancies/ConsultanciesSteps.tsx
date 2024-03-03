import datosImage from "../../../assets/datos.jpg";
import documentoImage from "../../../assets/documento.jpg";
import pagoImage from "../../../assets/pago.jpg";

const ConsultanciesSteps = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
      <div className="flex flex-col items-center space-y-5 md:space-y-0 mx-3">
        <img src={documentoImage} alt="" className="rounded-full h-40 w-40" />
        <p className="text-center">
          En Camilo García & Abogados tú eres lo primero. Encontraremos una
          solución a tu problema.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 mx-3">
        <img src={datosImage} alt="" className="rounded-full h-40 w-40" />
        <p className="text-center">
          Nuestro equipo de profesionales estudiará tu caso y te asesorará de
          forma inmediata y especializada.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 mx-3">
        <img src={pagoImage} alt="" className="rounded-full h-40 w-40" />
        <p className="text-center">
          Tomaremos las decisiones oportunas junto a ti, sea cual sea tu
          problema, Legista estará contigo.
        </p>
      </div>
    </div>
  );
};

export default ConsultanciesSteps;
