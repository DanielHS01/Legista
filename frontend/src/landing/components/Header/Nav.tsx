import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/abogados">Abogados</NavLink>
      <NavLink to="/asesorias">Asesorías</NavLink>
      <NavLink to="/formatos">Formatos</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-1/3 justify-end flex" id="topNavbar">
        <div className="hidden justify-between md:flex space-x-5">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaX /> : <FaBars />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full animate-fade-down space-y-4 text-xl md:hidden">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
