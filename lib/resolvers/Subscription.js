//done
/*Subscriptions are long-lasting GraphQL read operations that can update their result 
whenever a particular server-side event occurs. Most commonly, updated results are pushed from the server to subscribing clients.
For example, a chat application's server might use a subscription to
push newly received messages to all clients in a particular chat room.

Filtering events :
Sometimes, a client should only receive updated subscription
data if that data meets certain criteria. 
To support this, you can call the withFilter helper function 
in your Subscription field's resolver*/
const { withFilter } = require('apollo-server-express');  
const MESSAGE_SENT_TO_DIRECT_CHAT = 'MESSAGE_SENT_TO_DIRECT_CHAT'; // var for msg
const MESSAGE_SENT_TO_GROUP_CHAT = 'MESSAGE_SENT_TO_GROUP_CHAT'; // var for group chat 
const CHAT_CHANNEL = 'CHAT_CHANNEL'; // var to store chat channel
const GroupChat = require('../models/GroupChat'); // take the groupChat Model

const Subscription = {
  messageSentToDirectChat: {
    subscribe: withFilter(
      (parent, args, { pubsub }) =>
        pubsub.asyncIterator([MESSAGE_SENT_TO_DIRECT_CHAT]),
      (payload, variables, context) => {
        const { currentUserId } = context.context;
        return (
          currentUserId == payload.messageSentToDirectChat.receiver ||
          currentUserId == payload.messageSentToDirectChat.sender
        );
      }
    ),
  },
  messageSentToGroupChat: {
    // Show All messages sent to group chats the user belongs to but he didnt send ie the current user did not send the message
    subscribe: withFilter(
      (parent, args, context) =>
        context.pubsub.asyncIterator([MESSAGE_SENT_TO_GROUP_CHAT]),
      async (payload, variables, context) => {
        const { currentUserId } = context.context;
        const groupChatId =
          payload.messageSentToGroupChat.groupChatMessageBelongsTo;

        const groupChat = await GroupChat.findById(groupChatId);
        const userIsInGroupChat = groupChat.users.includes(currentUserId);
        return userIsInGroupChat;
      }
    ),
  },
  directMessageChat: {
    subscribe: withFilter(
      (parent, args, context) => context.pubsub.asyncIterator(CHAT_CHANNEL),
      (payload) => {
        const chat = payload.directMessageChat;
        console.log(chat);
        return chat;
      }
    ),
  },
};

module.exports = Subscription;

// 3 functions 
//subscribe  
