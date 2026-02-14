// Import the ExpressJS package
const express = require('express');
// Create an instance of Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Tell the server:
// - configure the server instance to respond to an additional route
// - the route will be a HTTP GET request on the homepage of the server (eg. localhost:3000/ ) 

// app.verb(path, callback)
app.get('/', (request, response) => {
    response.json({
        message: "Hello world! This is the challenge form ED, nice and organized"
    })
});

app.post('/repeater', (request, response) => {
    // Any submitted JSON keys will be on "body"
    // Access them with object syntax:
    let message = request.body.message;

    // Repeat the message!
    let repeatedMessage = message + message + message;

    // Send back a response to the client:
    response.json({
        repeatedMessage: repeatedMessage
    });
});


const messageController = require("./controllers/messageController")
app.use("/message", messageController);


//export the app
module.exports = {
    app: app
}