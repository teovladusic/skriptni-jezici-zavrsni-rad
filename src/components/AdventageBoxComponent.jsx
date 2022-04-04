import "./adventage-box-component.css";

const AdventageBoxComponent = ({
  img,
  title,
  description,
  backgroundColor,
  textColor,
  descriptionColor,
}) => {
  console.log(img);
  return (
    <div
      className="adventage-box-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={img} alt="" />
      <h4 style={{ color: textColor }}>{title}</h4>
      <p style={{ color: descriptionColor }}>{description}</p>
    </div>
  );
};

export default AdventageBoxComponent;
