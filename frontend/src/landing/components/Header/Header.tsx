import logoHeader from "./../../../assets/logoHeader.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="bg-custom-blue-900 sticky top-0 z-20 mx0-auto flex w-full items-center justify-between px-10 py-4 flex-wrap text-white">
        <div className="logo h-14 w-14">
          <img src={logoHeader} alt="" />
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Header;
