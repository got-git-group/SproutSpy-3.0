import './index.scss';
import React from "react";

const Plants = ( { plants } ) => {
    console.log(plants);
    return (
        <div>
            <h1>Results</h1>
            <section id="plantFlex">
                {plants.recommendedPlants.map((plant) => (
                    <div class="plantCard">
                        <h2 class="plantName">{plant.plantName}</h2>
                        <img class="plantImage" src={plant.plantImg} alt={plant.plantName} />
                        <ul class="plantDetails">
                            <li>Spacing: {plant.spacing}</li>
                            <li>Seed Depth: {plant.seedDepth}</li>
                            <li>Sunlight: {plant.sunlight}</li>
                        </ul>
                    </div>
                ))}
                {plants.nonRecommendedPlants.map((plant) => (
                    <div class="plantCard">
                        <h2 class="plantName">{plant.plantName}</h2>
                        <img class="plantImage" src={plant.plantImg} alt={plant.plantName} />
                        <ul class="plantDetails">
                            <li>Spacing: {plant.spacing}</li>
                            <li>Seed Depth: {plant.seedDepth}</li>
                            <li>Sunlight: {plant.sunlight}</li>
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Plants;