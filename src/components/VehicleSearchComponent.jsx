import "./vehicle-search-component.css";

const VehicleSearchComponent = ({ onSearch }) => {
  const onSearchPressed = e => {
    e.preventDefault();
    onSearch(
      document.getElementById("car-brand").value,
      document.getElementById("car-price").value
    );
  };

  return (
    <div className="vehicle-search-container">
      <form>
        <div className="car-input">
          <p>CAR BRAND</p>
          <select name="car-brand" id="car-brand">
            <option value="any">Any</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
            <option value="Ford">Ford</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Nissan">Nissan</option>
          </select>
        </div>
        <div className="car-input">
          <p>CAR PRICE</p>
          <select name="car-price" id="car-price">
            <option value="any">Any</option>
            <option value="lth">Price Low to High</option>
            <option value="htl">Price High to Low</option>
          </select>
        </div>
        <div className="search">
          <button
            className="search-btn"
            id="search-vehicles"
            onClick={e => onSearchPressed(e)}
          >
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleSearchComponent;
