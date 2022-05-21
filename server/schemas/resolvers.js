const { Plant, Zone } = require('../models');

const resolvers = {
  Query: {
    plants: async () => {
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
    }
  },
  // Mutation: {

  // },
};

module.exports = resolvers;