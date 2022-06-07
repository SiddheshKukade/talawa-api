const User = require('../models/User');
const GroupChatMessage = require('../models/GroupChatMessage');
const Organization = require('../models/Organization');
// DONE IMPORTING REQUIRED MODELS TO SEARCH
module.exports = {
  users: async (parent) =>
    await User.find({
      _id: {
        $in: [...parent.users],
      },
    }),
  creator: async (parent) => await User.findById(parent.creator),
  messages: async (parent) =>
    GroupChatMessage.find({
      _id: {
        $in: [...parent.messages],
      },
    }),
  organization: async (parent) =>
    await Organization.findById(parent.organization),
};
//CONTAINS THREE FUCNTIONS 
//USER - TAKES LIST OF USERS AND FINDS THEM 

// CREATOR - TAKES CREATOR ID/IDS AND FINDS THEM

//MESSAGES -- TAKES IDS OF MESSAGES AND RETURNS THE LIST IF FOUND

// ORGNIZATION - FINDS ORG OBJECT AND RETURNS MATCHING THE PROVIDED ID 
