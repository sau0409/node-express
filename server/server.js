const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let PORT = 3000;

//set webpage routes

//set public folder
app.use(express.static(__dirname+'/public'));

//set home route
app.get('/', (req, res) => {
    res.sendFile(__dirname+'\\public\\views\\home.html')
});

//set login route
app.get('/login', (req, res) => {
    res.sendFile(__dirname+'\\public\\views\\login.html')
});

//set signup route
app.get('/signup', (req, res) => {
    res.sendFile(__dirname+'\\public\\views\\signup.html')
});


//set app

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

//set apis

app.post('/api/login', (req, res)=> {
    console.log(req.body)
    res.redirect('/');
});

app.post('/api/signup', (req, res)=> {
    console.log(req.body)
    res.redirect('/');
});

//starting server
app.listen(PORT, ()=> console.log('server started at PORT: '+PORT));
