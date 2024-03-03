import Advisory from "../components/Advisory/Advisory";
import Appointment from "../components/Appointment/Appointment";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import Hero from "../components/Hero/Hero";
import OnlineDocs from "../components/OnlineDocs/OnlineDocs";

const Home = () => {
  return (
    <>
      <Hero />
      <Advisory />
      <CarouselComponent />
      <OnlineDocs />
      <Appointment />
    </>
  );
};

export default Home;
