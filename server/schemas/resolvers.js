const { Plant, Zone } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    plant: async () => {
      return await Plant.find({})
    },
    zones: async () => {
      return await Zone.find({})
    },
    getPlantsByZone: async (_, { zoneId }) => {
      return await Plant.find({zones: { $in : [zoneId]} });
    },
    getRecommendedPlants: async (_, { zoneId }) => {
      const results = await Plant.find({zones: { $in : [zoneId]} })
      return results.filter(plant => plant.recommended === true)
    },
    getNonRecommendedPlants: async (_, { zoneId }) => {
      const results = await Plant.find({zones: { $in : [zoneId]} })
      return results.filter(plant => plant.recommended === false)
    },
    getSinglePlant: async (parent, { plantId }) => {
      return await Plant.findOne({ _id: plantId })
    }
  },
  Mutation: {
    addPlant: async (parent, { plantName, spacing, seedDepth, plantImg, sunlight, indoorStartCalc, outdoorStartCalc, zones, recommended }, context) => {
      // if (context.user) {
        const newPlant = await Plant.create({
          plantName,
          spacing,
          seedDepth,
          plantImg,
          sunlight,
          indoorStartCalc,
          outdoorStartCalc,
          zones,
          recommended
        });
        return newPlant;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    removePlant: async (parent, { plantId }, context) => {
      // if (context.user) {
        const plant = await Plant.findOneAndDelete({
          _id: plantId
        });
        return plant;
    //   }
    // throw new AuthenticationError('You need to be logged in!');
    },
    updatePlant: async (parent, { plantId, plantName, spacing, seedDepth, plantImg, sunlight, indoorStartCalc, outdoorStartCalc, zones, recommended }, context) => {
      // if (context.user) {
        const updatedPlant = await Plant.findOneAndUpdate({
          _id: plantId
        }, {
          plantName,
          spacing,
          seedDepth,
          plantImg,
          sunlight,
          indoorStartCalc,
          outdoorStartCalc,
          zones,
          recommended
        }, {
          new: true
        });
        return updatedPlant;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;