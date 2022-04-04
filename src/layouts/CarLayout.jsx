import CarComponent from "../components/CarComponent";
import VehiclesFormComponent from "../components/VehiclesFormComponent";
import "./carlayout.css";

const CarLayout = () => {
  return (
    <div className="background">
      <div className="car-layout">
        <CarComponent />
      </div>
      <div className="vehicles-form">
        <VehiclesFormComponent />
      </div>
    </div>
  );
};

export default CarLayout;
