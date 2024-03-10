import { saveAs } from "file-saver";

interface CardsProps {
  image: string;
  document: string | Blob;
  name: string;
  alt: string;
}

export const Cards: React.FC<CardsProps> = ({ image, document, name, alt }) => {
  const onDownload = (archivo: string | Blob, nombre: string) => {
    saveAs(archivo, nombre);
  };

  return (
    <div className=" h-80 w-80 cursor-pointer">
      <img src={image} alt={alt} onClick={() => onDownload(document, name)} />
    </div>
  );
};
