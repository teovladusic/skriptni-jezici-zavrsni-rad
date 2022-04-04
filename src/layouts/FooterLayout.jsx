import "./footer-layout.css";

const FooterLayout = () => {
  return (
    <div className="footerlayout-container">
      <div className="info info1">
        <img src={require("../images/footer-logo.png")} alt="logo" />
        <p>
          We know the difference is in the details and that's why our car rental
          services in the tourism and business industry stand out for their
          quality.
        </p>
      </div>
      <div className="info info2">
        <h6>CALL US ON LINE 1</h6>
        <h4>100.1212.2000</h4>
        <h5>USEFUL LINK</h5>
        <ul>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Private Policy</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Terms and Contiditions</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Copyright Notification</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Register for New Member</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Press Release</p>
          </li>
        </ul>
      </div>
      <div className="info info2">
        <h6>CALL US ON LINE 2</h6>
        <h4>100.2424.2000</h4>
        <h5>OUR INFO</h5>
        <ul>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>About Royal Cars</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Our Mission and Strategy</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Our Vision</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Royal Cars and Adventages</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Contact Us</p>
          </li>
        </ul>
      </div>
      <div className="info info2 last">
        <div className="see-map-btn">
          <img src={require("../images/map.png")} alt="map" />
          <p>RoyalCars on Map</p>
        </div>
        <h5 className="info-map-text">ACCOUNT INFORMATION</h5>
        <ul>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Login to My Account</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Press Releases</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>User Dashboard</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Email Adress</p>
          </li>
          <li>
            <img src={require("../images/arrow-to-right.png")} alt=">" />
            <p>Lorem ipsus</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLayout;
