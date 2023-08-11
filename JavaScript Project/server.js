// Using John Keating's lectures on week 10,11 and 12 as a referance

const mongoose = require('mongoose');
const express = require('express'); // using to make an express app
const bodyParser = require('body-parser');
const connect = require('./connect');
var cors = require('cors');

const app = express();

const hbs = require('hbs');
const path = require('path');

// Setting up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));

// Testing Mongoose Connection using express
mongoose.connect(connect.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{  // 
    console.log("Successfully connected to database"); // Connection Successful
}).catch(err => {
    console.log("Error! Can't connect to database", err); // Conection UnSuccessful
    process.exit(); // similier to client.close() used previously
});

// CORS functionality to allow server to bypass restrictions
var allowedOrigins=[
    'http://localhost:3000',
    'http://localhost:4200'
]

var corsOptions = {
    origin: function(origin, callback){
        if(!origin) return callback(null,true); // allows null origin
        if(allowedOrigins.indexOf(origin) !== -1){
            callback(null, true); // allows origin equal to allowedOrigins
        }
        else{
            callback(new Error('Not Allowed By CORS'))
        }
    }
}
app.use(cors(corsOptions));

// server connecting to various routes for RESTful API
 require('./app/routes/students.route')(app);
 require('./app/routes/tutors.routes')(app);
 require('./app/routes/tutorials.routes')(app);

//Listening to CRUD operations on port 3000
app.listen(3000, () =>{
    console.log("Listening on port 3000");
});

// The Database is spilt into three collections
// students holds first and surnames, title, phone number, email, home address, date of birth, 
//gender, subject and whether they are allowed attend Virtually

//tutors holds all the same information as students except without date of birth,gender, subject and whether they can attend virtually

//tutorials holds the date and time of the tutorial, the student ids with each of their attendence, the tutor id,
// the fee, the tutorial subject, number and notes
