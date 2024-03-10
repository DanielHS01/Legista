import "./../../../App.css";
import Button from "../../../shared/Button";
const Hero = () => {
  return (
    <>
      <div className="hero-background bg-no-repeat bg-cover h-[40.9rem] w-full relative text-white flex flex-col space-y-10 items-center justify-center">
        <h1 className="text-5xl md:text-7xl">Asesorías Jurídicas</h1>
        <Button
          content="Reserva tu cita"
          href="https://calendly.com/camilogarcia_abogados/serviciolegal?month=2024-03"
        />
      </div>
    </>
  );
};

export default Hero;
