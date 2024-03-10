import divorceImage from "../../../assets/divorcio.jpg";

const SecondSlide = () => {
  return (
    <div className="w-10/12 flex flex-col md:flex-row justify-center items-center space-y-5 gap-5">
      <img
        src={divorceImage}
        className="h-32 md:h-64 rounded-md"
        alt="Camilo García Divorcios"
      />
      <div className="space-y-5">
        <h3 className="text-center text-3xl">Divorcios</h3>
        <hr />
        <p className="text-center text-xl">
          Si usted se casó en Colombia, ya sea matrimonio civil, católico,
          etc..., y su deseo es divorciarse, por intermedio de nosotros podrá
          hacerlo. Te orientamos para adelantar de manera correcta la disolución
          de la sociedad conyugal y el divorcio.
        </p>
      </div>
    </div>
  );
};

export default SecondSlide;
