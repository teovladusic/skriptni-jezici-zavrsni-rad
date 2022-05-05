import "./vehicle-component.css";
import Star from "../images/1-star.svg";

const VehicleComponent = ({ vehicle }) => {
  return (
    <div className="vehicle-container">
      <div className="vehicle-header">
        <p>{vehicle.name}</p>
        <div className="star-div">
          <img src={Star} alt="star" />
        </div>
      </div>
      <img src={vehicle.image} alt="car" />
      <div className="vehicle-footer">
        <div className="vehicle-stats">
          <p>
            Mileage: <b>{vehicle.mileage}</b>
          </p>
          <p>
            Loaction: <b>{vehicle.location}</b>
          </p>
          <p>
            Engine: <b>{vehicle.engine}</b>
          </p>
          <p>
            Transmission: <b>{vehicle.transmission}</b>
          </p>
        </div>
        <div className="vehicle-footer-price">
          <h6>{vehicle.price}</h6>
          <button>More Details</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleComponent;
