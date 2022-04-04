import "./about-us.css";
import AboutUsTextComponent from "../components/AboutUsTextComponent";

const AboutUsLayout = () => {
  return (
    <div className="about-us-container">
      <div className="left-image">
        <img src={require("../images/stipe.png")} alt="car" />
      </div>
      <div className="right-text">
        <AboutUsTextComponent />
      </div>
    </div>
  );
};

export default AboutUsLayout;
