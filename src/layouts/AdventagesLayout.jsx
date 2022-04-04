import "./adventages-layout.css";
import AdventageBoxComponent from "../components/AdventageBoxComponent";

const AdventagesLayout = () => {
  return (
    <div className="adventages-layout-container">
      <h6>120+ CARS TYPE BRANDS</h6>
      <h4>
        Royal Cars <b>Adventages</b>
      </h4>
      <div className="adventages-cards">
        <AdventageBoxComponent
          img={require("../images/customer-support.png")}
          title={"24/7 Customer Online Support"}
          description={"Call us Anywhere Anytime"}
          backgroundColor={"#fff"}
          textColor={"#000"}
          descriptionColor={"#a2a2a2"}
        />
        <AdventageBoxComponent
          img={require("../images/calendar.png")}
          title={"Reservations Anytime You Want"}
          description={"24/7 Online Reservation"}
          backgroundColor={"#FFCF00"}
          textColor={"#fff"}
          descriptionColor={"#fff"}
        />
        <AdventageBoxComponent
          img={require("../images/locations.png")}
          title={"Lots of Picking Locations"}
          description={"250+ Locations"}
          backgroundColor={"#fff"}
          textColor={"#000"}
          descriptionColor={"#a2a2a2"}
        />
      </div>
    </div>
  );
};

export default AdventagesLayout;
