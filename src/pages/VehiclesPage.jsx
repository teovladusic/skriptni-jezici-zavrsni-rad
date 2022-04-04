import React, { useState, useEffect, useRef } from "react";

const VehiclesPage = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return <div className="vehicles-container"></div>;
};

export default VehiclesPage;
