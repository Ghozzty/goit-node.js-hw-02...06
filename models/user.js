const { Schema, model } = require('mongoose');
const Joi = require("joi");

const userShema = Schema({
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: null,
    },
  
  });

  const User = model('user', userShema)


  const joiSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  })
 

  module.exports = {
    User,
    joiSchema,
  }