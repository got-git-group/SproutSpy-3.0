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
    plantImg: {
      type: String
    },
    zones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Zone'
      }
    ]
  }
);

const Plant = model('plant', plantSchema);

module.exports = Plant;