const User = require('../models/User');
const GroupChat = require('../models/GroupChat');
//done take the user and gropchat models
module.exports = {
  groupChatMessageBelongsTo: async (parent) => {
    return await GroupChat.findById(parent.groupChatMessageBelongsTo);
  },
  sender: async (parent) => {
    return await User.findById(parent.sender);
  },
};
// contains 2 functions : 
// groupChatMesssageBelonsTo : function finding list  of messages matching with the belongsTo Id provided 
// sender  : returns the sender info provided in param
