import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="left">
        <h2>
          Royal <strong>Cars</strong>
        </h2>
        <p>Rent a car page</p>
      </div>

      <div className="right">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/vehicles"}>Vehicles</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <img src={require("../images/burger-menu.png")} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
