import React, { useState } from "react";
import PlantCard from "./PlantCard";
import plantsData from "../data/plants";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter plants based on search term
  const filteredPlants = plantsData.filter((plant) =>
    plant.commonName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a plant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>

      {/* Display plant list */}
      <div className="plant-list">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantList;
