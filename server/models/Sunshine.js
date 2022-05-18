const { Schema, model } = require('mongoose');

const sunlightSchema = new Schema(
  {
    sunlightName: {
      type: String,
      required: true,
    },
    plants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Plant'
      }
    ] 
  }
);

const Sunlight = model('sunlight', sunlightSchema);

module.exports = Sunlight;