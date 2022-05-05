import { CircularProgress } from "@mui/material";
import VehicleComponent from "../components/VehicleComponent";
import "./vehicles-layout.css";

const VehiclesLayout = ({ vehicles, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress id="circular-progress" />
      </div>
    );
  }

  if (vehicles.length === 0) {
    return (
      <div>
        <h5>No such vehicles found.</h5>
      </div>
    );
  }

  return (
    <div className="vehicles-list">
      {vehicles.map(vehicle => {
        return <VehicleComponent vehicle={vehicle} />;
      })}
    </div>
  );
};

export default VehiclesLayout;
