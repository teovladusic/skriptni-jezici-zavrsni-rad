import "./vehiclesformcomponent.css";

const VehiclesFormComponent = () => {
  return (
    <div>
      <div className="header">
        <p>120+ CARS TYPE AND BRANDS</p>
        <h5>
          Search Your <b>Best Cars.</b>
        </h5>
      </div>
      <div className="vehicle-form">
        <form>
          <div className="car-input">
            <p>CAR BRAND</p>
            <select name="car-brand">
              <option value="bmw">bmw</option>
              <option value="mercedes">mercedes</option>
              <option value="audi">audi</option>
            </select>
          </div>
          <div className="car-input">
            <p>CAR PRICE</p>
            <select name="car-price">
              <option value="lth">Price Low to High</option>
              <option value="htl">Price High to Low</option>
            </select>
          </div>
          <div className="search">
            <button className="search-btn">SEARCH CAR NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehiclesFormComponent;
