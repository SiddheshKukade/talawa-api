//DONE 
const User = require('../models/User'); // TAKES USER MODEL
const Organization = require('../models/Organization'); // TAKES ORGANIZATION MODEL

module.exports = {
  organization: async (parent) =>
    await Organization.findOne({ _id: parent.organization }),
  user: async (parent) => await User.findOne({ _id: parent.user }),
}; // IT CONTAINS 2  ASYNC FUNCTIONS THAT FINDS A ORG AND USER WITH THE PROVIDED ID FROM THE PARENT PARAM
