const db = require('../config/connection');
const { Plant, Zone } = require('../models');

const plantData = require('./plantData.json');
const zoneData = require('./zoneData.json');

db.once('open', async () => {
  console.log(Zone);
  await Zone.deleteMany({});
  await Plant.deleteMany({});

  const zones = await Zone.insertMany(zoneData);
  console.log(zones);

  //const plants = await Plant.insertMany(plantData);
  //console.log(plants);

  // plants.map(function(currentValue, index, arr), thisValue);
  // plants.map((zones, zones.zoneName) => (plants.zoneName));

  const enrichedPlants = [];

  for (let i = 0; i < plantData.length; i++) {
    const plant = plantData[i];

    const newZones = [];

    for (let i = 0; i < plant.zones.length; i++) {
      const zone = plant.zones[i];

      const zoneId = zones.find(z => z.zoneName === zone)._id;
      newZones.push(zoneId);
    }

    enrichedPlants.push({...plant, zones: newZones});
  }


  const plants = await Plant.insertMany(enrichedPlants);
  console.log(plants);

  console.log('Seeding complete!');
  process.exit(0);
})