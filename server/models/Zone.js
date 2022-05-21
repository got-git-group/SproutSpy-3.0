const { Schema, model } = require('mongoose');

const zoneSchema = new Schema(
  {
    zoneName: {
      type: String,
      required: true,
    },
    // plants: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Plant'
    //   }
    // ] 
  }
);

const Zone = model('zone', zoneSchema);

module.exports = Zone;