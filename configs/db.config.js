const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/express-basic-auth-dev', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
//   .catch(err => console.error('Error connecting to mongo', err));

const MONGODB_URI = "mongodb+srv://public-user:admin2021@cluster0.jcdmn.mongodb.net/lab-express-basic-auth-dev?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
