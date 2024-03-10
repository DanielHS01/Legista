import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-custom-blue-900 to-blue-950 h-[46.4rem] text-white space-y-10">
      <div className="flex flex-col items-center">
        <div className="animate-spin animate-infinite animate-ease-in">
          <Spinner color="purple" size="xl" />
        </div>
        <p className="text-center text-3xl">Cargando, por favor espere</p>
      </div>
    </div>
  );
};

export default Loading;
