import "./about-us-text-component.css";

const AboutUsTextComponent = () => {
  return (
    <div className="about-us-text-container">
      <h6>KNOW MORE ABOUT US</h6>
      <h3>
        Who <b>Royal Cars</b> Are.
      </h3>
      <p className="about-us-text">
        We know the difference is in the detauils and that's why our car rental
        services in the tourism and business industry stand out for their
        quality and good taste.
      </p>
      <ul>
        <li>
          <img src={require("../images/checkmark.png")} alt="car" />
          <p>We working since 1980 with 4,000 customers</p>
        </li>
        <li>
          <img src={require("../images/checkmark.png")} alt="car" />
          <p>All brand type cars in our garage</p>
        </li>
        <li>
          <img src={require("../images/checkmark.png")} alt="car" />
          <p>1,000+ picking locations around the world</p>
        </li>
      </ul>
      <img src={require("../images/signature.png")} alt="signature" />
    </div>
  );
};

export default AboutUsTextComponent;
