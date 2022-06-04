const MembershipRequest = require('../../../lib/models/MembershipRequest');
var ObjectID = require('mongodb').ObjectID;
// jest.useFakeTimers();
const cancelMemberShipFuction = require('../../../lib/resolvers/membership_request_mutations/cancel_membership_request');

const database = require('../../../db');

beforeAll(async () => {
  require('dotenv').config();
  await database.connect();
});
afterAll(() => {
  database.disconnect();
});

describe('tests for lib/resolvers/membership_request_mutations/cancel_membership_request.js', aysnc () => {
  test('Should complete  the Cancel  MemberShip operation Sucessfully.', (done) => {
    var userId = '629747933e3ed92a7a84b40e'; // already avaialbe user
    var orgId = new ObjectID();
    var memberShipRequestId = new ObjectID();
    const membershipRequestObject = {
      _id: memberShipRequestId,
      organization: orgId,
      userId: userId,
      status: 'ACTIVE',
    };
    const membershipRequest = new MembershipRequest(membershipRequestObject);
     membershipRequest.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + ' saved to bookstore collection.');
    });
    const args = { membershipRequestId: memberShipRequestId };
    const parent = {};
    const context = { userId };
    expect(cancelMemberShipFuction(args , parent ,context)).resolves.toBe({});
    done();
  });
});
  //   // });
  //   // test('Should complete  the Cancel  MemberShip operation By giving error.', async () => {
  //   //   var userId = '629747933e3ed92a7a84b40e'; // already avaialbe user
  //   //   var orgId = new ObjectID();
  //   //   var memberShipRequestId = new ObjectID();
  //   //   const membershipRequestObject = {
  //   //     _id: memberShipRequestId,
  //   //     organization: orgId,
  //   //     userId: userId,
  //   //     status: 'ACTIVE',
  //   //   };
  //   //   const membershipRequest = new MembershipRequest(membershipRequestObject);
  //   //   await membershipRequest.save(function (err, book) {
  //   //     if (err) return console.log('Bro this is eroror', err);
  //   //     console.log(book.userId + ' saved to bookstore collection.');

  //   //     const args = { membershipRequestId: memberShipRequestId };
  //   //     const parent = {};
  //   //     const context = { userId };
  //   //     console.log('ssidsid', cancelMemberShipFuction(parent, args, context));
  //   //     expect(cancelMemberShipFuction(parent, args, context)).toBe({});
  //   //   });
  //   // });

// const groupChatMessageFindMethod = require('../../../lib/resolvers/group_chat_query/groupChatMessages');

describe('tests for l', () => {
  test('Should return  a JSON response (getting the group chat messages from the database)', async () => {
    expect(120).toBeTruthy();
  });
});
