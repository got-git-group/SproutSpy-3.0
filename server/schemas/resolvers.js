const { Plant, Zone } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const withAuth = require('graphql-auth');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    plant: async () => {
      return await Plant.find({}).populate('zones');
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
        const newPlant = new Plant({
          plantName,
          spacing,
          seedDepth,
          plantImg,
          sunlight,
          indoorStartCalc,
          outdoorStartCalc,
          recommended
        });
        const updatedPlant = await newPlant.save();
        return await Plant.findOneAndUpdate({ _id: updatedPlant._id }, { $push: { zones: { $each: zones } } }, { new: true })
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
          recommended
        }, {
          new: true
        });
        const zoneUpdate = await updatedPlant.save();
        return await Plant.findOneAndUpdate({ _id: zoneUpdate._id }, { $push: { zones: { $each: zones } } }, { new: true })
      // }
      // throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;