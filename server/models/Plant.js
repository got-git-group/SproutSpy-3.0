const { Schema, model } = require('mongoose');

const plantSchema = new Schema(
  {
    plantName: {
      type: String,
      required: true,
    },
    spacing: {
      type: String,
      required: true,
    },
    seedDepth: {
      type: String,
    },
    plantImg: {
      type: String
    },
    sunlight: {
      type: String,
      required: true,
    },
    indoorStartCalc: {
      type: Number
    },
    outdoorStartCalc: {
      type: Number
    },
    zones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Zone'
      }
    ],
    recommended: {
      type: Boolean,
    }
  }
);

const Plant = model('plant', plantSchema);

module.exports = Plant;