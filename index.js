const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;


//body parser
app.use(bodyParser.urlencoded({extended: false}))

//db connection
db
    .authenticate()
    .then(() => {
        console.log('Connected to database!')
    })
    .catch(err => {
        console.log('Error connecting to database!', err);
    });

//routes
app.get('/', (req, res) => {
    res.send('It is working!');
});

// tutors routes
app.use('/tutors', require('./routes/tutors'));
app.use('/pets', require('./routes/pets'));

app.listen(PORT, function(){
    console.log('Express is running on port ' + PORT);
});
