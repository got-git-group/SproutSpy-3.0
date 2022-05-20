const db = require('../config/connection');
const { Plant, Zone } = require('../models');

const plantData = require('./plantData.json');
const zoneData = require('./zoneData.json');

db.once('open', async () => {
  console.log(Zone);
  await Zone.deleteMany({});
  await Plant.deleteMany({});

  const zones = await Zone.insertMany(zoneData);

  const plants = await Plant.insertMany(plantData);

  console.log('Seeding complete!');
  process.exit(0);
})