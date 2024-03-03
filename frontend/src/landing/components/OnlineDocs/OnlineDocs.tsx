import docsImage from "../../../assets/docs.jpg";

const OnlineDocs = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 justify-center space-y-5 md:space-y-0 bg-indigo-50 items-center">
      <div className="flex flex-col justify-center items-center md:items-start space-y-5">
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
        <button className="px-3 py-2 rounded-md bg-yellow-500 text-black hover:bg-amber-500">
          Ver Formatos
        </button>
      </div>
      <img src={docsImage} alt="" className=" h-64 rounded-md" />
    </div>
  );
};

export default OnlineDocs;
