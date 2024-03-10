import { FORMAT_CARDS } from "../../constants/formatCards";
import { Cards } from "./Cards";
import "./../../../App.css";

const FormatsGrid = () => {
  return (
    <div className="formats-background bg-no-repeat bg-cover w-full relative text-white flex flex-col space-y-10 p-10 items-center md:items-start">
      <h2 className="text-3xl font-bold text-center">Formatos y Minutas</h2>
      <p className="text-2xl">
        A continuación, podrás descargar el formato que necesites revisar
        simplemente dando clic sobre el.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {FORMAT_CARDS.map((item, index) => (
          <Cards
            key={index}
            image={item.href}
            document={item.document}
            name={item.name}
            alt={`Documento ${item}`}
          ></Cards>
        ))}
      </div>
    </div>
  );
};

export default FormatsGrid;
