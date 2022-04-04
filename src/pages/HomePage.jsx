import "./homepage.css";
import CarLayout from "../layouts/CarLayout";
import AboutUsLayout from "../layouts/AboutUsLayout";
import AdventagesLayout from "../layouts/AdventagesLayout";
import FooterLayout from "../layouts/FooterLayout";

const HomePage = () => {
  return (
    <div>
      <CarLayout />
      <AboutUsLayout />
      <AdventagesLayout />
      <FooterLayout />
    </div>
  );
};

export default HomePage;
