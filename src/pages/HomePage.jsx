import "./homepage.css";
import CarLayout from "../layouts/CarLayout";
import AboutUsLayout from "../layouts/AboutUsLayout";
import AdventagesLayout from "../layouts/AdventagesLayout";
import FooterLayout from "../layouts/FooterLayout";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CarLayout />
      <AboutUsLayout />
      <AdventagesLayout />
      <FooterLayout />
    </div>
  );
};

export default HomePage;
