import './index.scss';
import React from "react";

const Plants = ( { plants } ) => {
    console.log(plants);
    return (
        <div>
            <h1>Results</h1>
            <section id="plantFlex">
                {/* loop through results and create a plant card for each result, putting those with the recommended value first */}
                {plants.recommendedPlants.map((plant) => (
                    <div key={plant._id} className="plantCard">
                        <h2 className="plantName">{plant.plantName}</h2>
                        <img className="plantImage" src={plant.plantImg} alt={plant.plantName} />
                        <ul className="plantDetails">
                            <li>Spacing: {plant.spacing}</li>
                            <li>Seed Depth: {plant.seedDepth}</li>
                            <li>Sunlight: {plant.sunlight}</li>
                        </ul>
                        {/* add link/anchor to SinglePlant here */}
                    </div>
                ))}
                {plants.nonRecommendedPlants.map((plant) => (
                    <div key={plant._id} className="plantCard">
                        <h2 className="plantName">{plant.plantName}</h2>
                        <img className="plantImage" src={plant.plantImg} alt={plant.plantName} />
                        <ul className="plantDetails">
                            <li>Spacing: {plant.spacing}</li>
                            <li>Seed Depth: {plant.seedDepth}</li>
                            <li>Sunlight: {plant.sunlight}</li>
                        </ul>
                    </div>
                ))}
                {/* add plant to calendar button */}
                {/* Edit/Delete Plant */}
            </section>
        </div>
    )
};

export default Plants;