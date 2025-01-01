import React, { useState } from "react";

const PlantCard = ({ plant }) => {
  const [showCare, setShowCare] = useState(false);

  const toggleCareInstructions = () => {
    setShowCare(!showCare);
  };

  return (
    <div className="plant-card">
      <h3>{plant.commonName}</h3>
      <img src={plant.imageUrl} alt={plant.commonName} />
      <p>{plant.description}</p>
      <button className="care-button" onClick={toggleCareInstructions}>
        {showCare ? "Hide Care Details" : "Show Care Details"}
      </button>
      
      {/* Conditional rendering of care instructions */}
      {showCare && (
        <div className="care-instructions">
          <h4>Care Instructions:</h4>
          <p><strong>Light:</strong> {plant.light}</p>
          <p><strong>Water:</strong> {plant.water}</p>
          <p><strong>Humidity:</strong> {plant.humidity}</p>
          <p><strong>Fertilizer:</strong> {plant.fertilizer}</p>
          <h5>Common Pests:</h5>
          <ul>
            {plant.pests.map((pest, index) => (
              <li key={index}>{pest}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlantCard;
