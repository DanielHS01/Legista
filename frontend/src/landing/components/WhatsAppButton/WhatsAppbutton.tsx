import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppbutton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573125373231&text=Hola%2C+bienvenido+a+Legista.%0A%C2%BFC%C3%B3mo+te+podemos+ayudar%3F&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full h-14 w-14 shadow-lg z-10 items-center justify-center flex transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppbutton;
