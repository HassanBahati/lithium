//imports
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const cors = require('cors');
const bodyParser = require("body-parser");
const passport = require('passport');

//intialise express
const app = express();

//importing routes
const ordersRoute = require('./routes/orderRoute');
const registerRoute = require('./routes/registerRoutes');
const loginRoute = require('./routes/loginRoutes');

//reg model
const Registration = require('./models/usersModel');

//require expre session 
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

//middleware --function that excutes when routes are being hit
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession);

//passport congifgurations
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

//for cross origin resource sharing 
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*") //update to match detail you make requests from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
      res.header('Access-Control-Allow-Credentials', true);
      next();
  });

//CONNECT TO DATABASE
//mongoose a package that helps to connect database
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, }
);

mongoose.Promise = global.Promise;
let db = mongoose.connection
//db.on("error", console.error.bind(console, "Failed to connect to database"));
db.once("open", () => console.log("Connected to db"))
db.on("error", (error) => {
  console.log("Failed to connect to db", error )
});

// Static folder
app.use(express.static(__dirname + '/views/'));

//setting html as a templeting engine 
app.set('view engine', 'html');

//primary route
app.get('/', (req,res) => {
    res.sendFile('index');
});

//incase a route doesnt exist
app.get('*', (req, res) => {
  res.send('the route specified doesnt exist');
});

//logout route 
app.post('/logout', (req, res) => {
  if (req.session) {
      const logout = req.session.destroy((err)=> {
          if (err) {
              console.log(err)
          }

res.json(logout)
      })
  }
});

//instantiating routes
app.use('/orders', ordersRoute); 
app.use('/register', registerRoute);
app.use('/login', loginRoute);

//setting where the server listens
app.listen(3000, () => {
  console.log('server listening on port 3000');
});
