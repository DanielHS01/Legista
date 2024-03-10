import docsImage from "../../../assets/docs.jpg";
import Button from "../../../shared/Button";

const OnlineDocs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 lg:space-x-40 md:space-y-0 p-10 bg-indigo-50 text-custom-blue-800">
      <div className="flex flex-col justify-center items-center md:items-start space-y-5 text-center md:text-start">
        <h3 className="text-3xl">Documentos Online y Contratos</h3>
        <hr />
        <div className="flex flex-col justify-center text-lg ">
          <p className="text-xl">Redacción de Documentos</p>
          <p>
            ¡Deja que nosotros lo hagamos por ti! Tenemos muchas opciones para
            ayudarte. Estamos comprometidos y dispuestos a resolver tus
            necesidades legales.
          </p>
        </div>
        <Button content="Ver Formatos" href="/formatos" />
      </div>
      <img
        src={docsImage}
        alt="Camilo García Redacción Documentos"
        className=" h-64 rounded-md"
      />
    </div>
  );
};

export default OnlineDocs;
