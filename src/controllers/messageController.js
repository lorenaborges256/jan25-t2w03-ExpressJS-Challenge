// Import the ExpressJS package
const express = require('express');
const router = express.Router();


// Read route
router.get("/", (request, response) => {
    response.send(`This is the ${request.method} for the ${request.baseUrl} route!!`);
})

function messageRouteWithData(request, response) {

    response.json({
        message: request.body.message,
        method: request.method,
        route: request.baseUrl
    });
}
// POST = Create
router.post('/', (request, response) => messageRouteWithData(request, response));

// PUT and PATCH = Update
router.put('/', (request, response) => messageRouteWithData(request, response));
router.patch('/', (request, response) => messageRouteWithData(request, response));

// DELETE = Delete
router.delete('/', (request, response) => messageRouteWithData(request, response));

// Unnamed or "default" exports
module.exports = router;