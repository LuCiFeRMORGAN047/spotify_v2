const express = require('express')
const session = require('express-session');
const cors = require('cors')
const mongoose = require("mongoose");
const authroute = require('./routes/AuthRoute')
const userroute = require('./routes/UserRoute')
const searchroute = require('./routes/SearchRoute')
const app = express()
require('dotenv').config()
app.use(express.json())
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions))
mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
  app.use(session({
    secret: 'hey',
    resave: false,
    saveUninitialized: true
  }));
app.use(authroute)
app.use(userroute)
app.use(searchroute)
app.listen(5000 , ()=>{
    console.log("server is running");
})
