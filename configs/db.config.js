const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-basic-auth-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose
//   .connect(MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo", err);
//   });
