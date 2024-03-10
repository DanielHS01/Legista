import { Carousel } from "flowbite-react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

const CarouselComponent = () => {
  return (
    <div className="h-[35rem] sm:h-[30rem] xl:h-[28rem] 2xl:h-96 text-white">
      <Carousel slide={false}>
        <div className="flex h-full items-center justify-center bg-blue-900">
          <FirstSlide />
        </div>
        <div className="flex h-full items-center justify-center bg-blue-900">
          <SecondSlide />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
