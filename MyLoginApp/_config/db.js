const config = require('./../config');
const mongoose = require('mongoose');


mongoose.connect(process.env.url, { useNewUrlParser: true }, function(err, client){
   if(err)
   {
      console.log('error occurred while connecting atlas....\n');
   }
   console.log('connected...');
   // console.log(client);
   //const db = client.db('NewsOnTap');
   //global.db = db;
});
mongoose.Promise = global.Promise;

module.exports = {
   User: require('./../DAL/user.model')
};;
// {
//     User: require('./../DAL/user.model'),
//     connectClient
//};



// const MongoClient = require('mongodb').MongoClient;
// function connectClient() {
//    MongoClient.connect(process.env.url, { useNewUrlParser: true }, function (err, client) {
//       if (err) {
//          console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
//       }
//       console.log('Connected...');
//       const db = client.db("NewsOnTap")
//       // perform actions on the collection object
//       global.db = db;
//    });
// }

// module.exports = connectClient;