import logoFooter from "../../../assets/logoFooter.png";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-custom-blue-900 flex flex-col md:flex-row text-white justify-center items-center md:space-x-20 space-y-5">
        <img src={logoFooter} alt="" className=" h-32 md:h-52" />
        <div className="md:flex flex-col space-y-5">
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/jurisappco/" target="_blank">
              <FaFacebook size={40} />
            </a>
            <a
              href="https://www.instagram.com/jurisappco/?next=%2F"
              target="_blank"
            >
              <FaInstagram size={40} />
            </a>
            <a href="https://twitter.com/JurisAppCol" target="_blank">
              <FaXTwitter size={40} />
            </a>
            <a href="https://www.threads.net/@jurisappcol" target="_blank">
              <FaThreads size={40} />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p>+57 3125373231</p>
            <p>info@camilogarcia.co</p>
          </div>
        </div>
      </div>
      <div className="bg-custom-blue-900 flex justify-center items-center text-white pb-4 pt-2">
        &copy; {new Date().getFullYear()} Camilo García | Abogados
      </div>
    </>
  );
};

export default Footer;
