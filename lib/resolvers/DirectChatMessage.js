const User = require('../models/User'); //DONE  get user  
const DirectChat = require('../models/DirectChat'); // get direct chat model

module.exports = {
  directChatMessageBelongsTo: async (parent) => {
    return await DirectChat.findById(parent.directChatMessageBelongsTo);
  }, // returns list of chat mesaages from the id provided
  sender: async (parent) => {
    return await User.findById(parent.sender);
  },  // returns list/one  of chat users/user matching the sender id
  receiver: async (parent) => {
    return await User.findById(parent.receiver);
  },
  // returns object of user who is recevier provided in params
};
