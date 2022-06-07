const User = require('../models/User'); //DONE GET THE USER MODEL
const DirectChatMessage = require('../models/DirectChatMessage');// GET THE DIRECTMEG MODEL 
const Organization = require('../models/Organization'); // GET THE ORG MODEL

module.exports = {
  users: async (parent) =>
    await User.find({
      _id: {
        $in: [...parent.users],
      },
    }), // FUNCTION GIVES LIST OF USERS WITH PASSED IDS FROM PARAM
  creator: async (parent) => await User.findById(parent.creator), // FINDS USER PASSED BY CREATOR.ID PARAM
  messages: async (parent) =>
    DirectChatMessage.find({
      _id: {
        $in: [...parent.messages],
      },
    }), //FINDS THE MESAAGES PASSED AS IDS
  organization: async (parent) =>
    await Organization.findById(parent.organization), // FINDS THE ORG REQUIRED FROM ID PROVIDED IN PARAMS
};
