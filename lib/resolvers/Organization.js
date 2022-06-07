// DONE 
const User = require('../models/User'); // TAKE USER MODEL 
const MembershipRequest = require('../models/MembershipRequest'); // TAKE MEMBER SHIP MODEL 
const { NotFoundError } = require('errors'); // TO SHOW ERRORS CUSTOM ERROR PACAKGE
const requestContext = require('talawa-request-context');

const Organization = {
  creator: async (parent) => {
    const user = await User.findById(parent.creator._id);
    if (!user) {
      throw new NotFoundError(
        requestContext.translate('user.notFound'), // SHOWING A CUSTOM ERROR
        'user.notFound',
        'user'
      );
    }
    return user;
  }, // FUNCTION THAT FINDS THE USER BY ID AND THEN RETURNS THE USER IF FOUND ELSE ERROR
  admins: async (parent) => {
    const admins = await User.find({
      _id: {
        $in: [...parent.admins],
        //The $in operator selects the documents where the value of a field equals any value in the specified array. To specify an $in expression, use the following prototype:
        //BASICALLY USED TO CHECK IF ANY VALUE IN THE ARRAY IS PRESENT 
      },
    });
    return admins;
  }, // FINDS A LIST OF USERS  CONTAINING THE ADMINS ID PROVIDED   
  members: async (parent) => {
    const members = await User.find({
      _id: {
        $in: [...parent.members],
      },
    });
    return members;
  }, // FINDS MEMBERS CONTAINING THE ID PROVIDED IN PARAMS
  membershipRequests: async (parent) => {
    const membershipRequests = await MembershipRequest.find({
      _id: {
        $in: [...parent.membershipRequests],
      },
    });
    return membershipRequests;
  }, // FINDS LIST OF MEMBERSHIP REQUESTS CONTAINING ID PROVIDED IN PARAM
  blockedUsers: async (parent) => {
    const users = await User.find({
      _id: {
        $in: [...parent.blockedUsers],
      },
    });
    return users;
  },
}; // FINDS LIST OF USERS WHOSE ID PASSED IN PARAMS AS A BLOCKED USER

module.exports = Organization;
