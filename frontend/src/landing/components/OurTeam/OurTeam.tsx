import { Modal } from "flowbite-react";
import { useState } from "react";
import firstLawyer from "../../../assets/fotoPerfil.jpg";
import secondLawyer from "../../../assets/abogado.jpg";
import "./../../../App.css";

const OurTeam = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  return (
    <div className="lawyers-background bg-no-repeat bg-cover w-full relative text-white flex flex-col space-y-10 p-10 items-center md:items-start">
      <h2 className="text-3xl font-bold">Nuestro Equipo</h2>
      <p className="text-xl text-center">
        Talento, experiencia, dedicación y responsabilidad, nuestro compromiso
        con usted.
      </p>
      <div className="flex flex-col md:flex-row space-y-9 md:space-y-0 md:space-x-60">
        <div className="flex flex-col items-center">
          <img
            src={firstLawyer}
            alt="Camilo García Sotelo"
            className="h-56 md:h-80 rounded-md cursor-pointer"
            onClick={() => setOpenModal(true)}
          />
          <p className="text-xl">Camilo García Sotelo</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={secondLawyer}
            alt="Sebastián García Sotelo"
            className="h-56 md:h-80 rounded-md cursor-pointer"
            onClick={() => setOpenSecondModal(true)}
          />
          <p className="text-xl">Sebastián García Sotelo</p>
        </div>
      </div>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="text-custom-blue-800"
      >
        <Modal.Header>
          <h2 className="text-custom-blue-800">Camilo Garcia Sotelo</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-5">
            <h3>Abogado Especialista en Derecho Penal y Criminología. </h3>
            <p>
              Abogado de la Universidad la Gran Colombia, Especialista en
              derecho penal y criminología de la misma universidad. Su ejercicio
              profesional se ha centrado como abogado litigante, su práctica
              está orientada a asuntos de naturaleza Penal, Familiar, Laboral y
              Civil, adquiriendo una amplia experiencia en el manejo de
              procesos, aunado a ello se ha desempeñado en el área de Derecho
              Notarial.
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        dismissible
        show={openSecondModal}
        onClose={() => setOpenSecondModal(false)}
        className="text-custom-blue-800"
      >
        <Modal.Header>
          <h2 className="text-custom-blue-800">Sebastián Garcia Sotelo</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-5">
            <h3>
              Abogado Especialista en Derecho Administrativo y Constitucional.{" "}
            </h3>
            <p>
              Abogado egresado de la facultad de Derecho de la Universidad
              Agraria de Colombia, Especialista en Derecho Constitucional y
              Administrativo de la Universidad Catolica de Colombia. Su práctica
              profesional ha estado orientada al litigio en las diferentes ramas
              del Derecho Público, con amplias facultades de substanciación y
              suficientes hábitos de argumentación jurídica, aplicados a sus
              diferentes actuaciones. Actualmente se desempeña como abogado
              contratista de la Empresa de Fomento y Desarrollo Sostenible de
              Occidente en todo lo relacionado en Contratación Estatal y Derecho
              Constitucional, por otra arte, dedicado al litigio desde hace mas
              de tres años en temas relacionados en Contratación Estatal,
              Administrativo, Familia y Civil.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OurTeam;
