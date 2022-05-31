const { Schema, model } = require('mongoose');
const zoneSchema = require('./Zone');

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    zone: {
      type: Schema.Types.ObjectId,
      ref: 'Zone',
    },
    springFrost: {
      type: String,
    }
  },
  {
    toJSON: {
      // virtuals: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;