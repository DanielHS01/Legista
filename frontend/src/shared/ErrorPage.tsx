import { NavLink } from "react-router-dom";
import Button from "./Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-custom-blue-900 to-blue-950 h-[46.4rem] text-white space-y-10">
      <div>
        <h2 className="animate-bounce animate-infinite text-9xl text-center font-bold">
          404
        </h2>
        <p className="text-center text-3xl">Página no Encontrada</p>
      </div>
      <NavLink to="/">
        <Button content="Volver al inicio" href="/" />
      </NavLink>
    </div>
  );
};

export default ErrorPage;
