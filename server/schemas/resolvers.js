const { Plant, Zone } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    plant: async () => {
      return await Plant.find({}).populate("zones");
    },
    zones: async () => {
      return await Zone.find({});
    },
    getPlantsByZone: async (_, { zoneId }) => {
      return await Plant.find({ zones: { $in: [zoneId] } });
    },
    getRecommendedPlants: async (_, { zoneId }) => {
      const results = await Plant.find({ zones: { $in: [zoneId] } });
      return results.filter((plant) => plant.recommended === true);
    },
    getNonRecommendedPlants: async (_, { zoneId }) => {
      const results = await Plant.find({ zones: { $in: [zoneId] } });
      return results.filter((plant) => plant.recommended === false);
    },
    getSinglePlant: async (parent, { plantId }) => {
      return await Plant.findById(plantId);
    },
  },
  Mutation: {
    addPlant: async (
      parent,
      {
        plantName,
        spacing,
        seedDepth,
        plantImg,
        sunlight,
        indoorStartCalc,
        outdoorStartCalc,
        zones,
      },
      { auth }
    ) => {
      if (!auth.isAuthenticated) {
        throw new AuthenticationError("You need to be logged in!");
      }
      try {
        const newPlant = new Plant({
          plantName,
          spacing,
          seedDepth,
          plantImg,
          sunlight,
          indoorStartCalc,
          outdoorStartCalc,
          // Hard coded default value for recommended to false
          recommended: false,
        });
        if (!zones) {
          console.log("no zones");
          return await newPlant.save();
        } else if (zones) {
          console.log("has zones");
          const updatedPlant = await newPlant.save();
          console.log(updatedPlant);
          return await Plant.findOneAndUpdate(
            { _id: updatedPlant._id },
            { $push: { zones: { $each: zones } } },
            { new: true }
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
    removePlant: async (parent, { plantId }, { auth }) => {
      if (!auth.isAuthenticated) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return Plant.findOneAndDelete({
        _id: plantId,
      });
    },
    updatePlant: async (
      parent,
      {
        plantId,
        plantName,
        spacing,
        seedDepth,
        plantImg,
        sunlight,
        indoorStartCalc,
        outdoorStartCalc,
      },
      { auth }
    ) => {
      if (!auth.isAuthenticated) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const updatedPlant = await Plant.findOneAndUpdate(
        {
          _id: plantId,
        },
        {
          plantName,
          spacing,
          seedDepth,
          plantImg,
          sunlight,
          indoorStartCalc,
          outdoorStartCalc,
        },
        {
          new: true,
        }
      );
      // if (!zones) {
      return updatedPlant;
      // } else if (zones) {
      //   return await Plant.findOneAndUpdate(
      //     { _id: updatedPlant._id },
      //     { $push: { zones: { $each: zones } } },
      //     { new: true }
      //   );
      // }
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
