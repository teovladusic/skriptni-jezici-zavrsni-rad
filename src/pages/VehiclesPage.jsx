import "./vehicles-page.css";
import Navbar from "../components/Navbar";
import VehicleSearchComponent from "../components/VehicleSearchComponent";
import VehiclesLayout from "../layouts/VehiclesLayout";
import FooterLayout from "../layouts/FooterLayout";
import VehiclesHeaderComponent from "../components/VehiclesHeaderComponent";
import { useState, useEffect } from "react";
import VehiclesService from "../common/VehiclesService";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVehicles("any", "any");
  }, []);

  async function getVehicles(brand, price) {
    let vehicles = await VehiclesService.getAllVehicles(brand, price);
    vehicles.forEach(vehicle => (vehicle.price = vehicle.price + " $/Day"));

    setVehicles(vehicles);
    setLoading(false);
  }

  return (
    <div>
      <Navbar />
      <div className="vehicles-container">
        <VehiclesHeaderComponent />
        <VehicleSearchComponent onSearch={getVehicles} />
        <VehiclesLayout vehicles={vehicles} loading={loading} />
        <FooterLayout />
      </div>
    </div>
  );
};

export default VehiclesPage;
