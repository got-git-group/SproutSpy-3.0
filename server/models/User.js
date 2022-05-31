const { Schema, model } = require('mongoose');
const zoneSchema = require('./Zone');

const userSchema = new Schema(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    // how do we add validations for password?
    password: { 
      type: String, 
      required: true 
    },
    zone: {
      type: Schema.Types.ObjectId,
      ref: 'Zone',
    },
    springFrost: {
      type: Date,
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