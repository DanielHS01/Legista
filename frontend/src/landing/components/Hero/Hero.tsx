import "./../../../App.css";

const Hero = () => {
  return (
    <>
      <div className="hero-background bg-no-repeat bg-cover h-[40.9rem] w-full relative text-white flex flex-col space-y-10 items-center justify-center">
        <h1 className="text-5xl md:text-7xl">Asesorías Jurídicas</h1>
        <button className=" px-3 py-2 rounded-md bg-yellow-500 text-black hover:bg-yellow-600">
          Reserva tu cita
        </button>
      </div>
    </>
  );
};

export default Hero;
