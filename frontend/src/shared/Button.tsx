import { Link } from "react-router-dom";

interface ButtonProps {
  content: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ content, href }) => {
  return (
    <button className=" bg-yellow-400 text-custom-blue-800 py-1 px-4 text-lg rounded-lg hover:animate-jump hover:bg-amber-500">
      <Link to={href} target="_blank">
        {content}
      </Link>
    </button>
  );
};

export default Button;
