const mongoose = require('mongoose'); //mongoose to connect to MONGO DB
const logger = require('logger');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    }); //connecting to mongo DB with connection String 
  } catch (error) {
    logger.error('Error while connecting to mongo database', error); // error if failed
    process.exit(1);
  }
};

const disconnect = async () => {
  await mongoose.connection.close();
}; // disconnect function to kill the connection
module.exports = { connect, disconnect };
