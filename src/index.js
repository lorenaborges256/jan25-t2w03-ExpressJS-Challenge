const {app} = require("./server.js")
// Set up any data needed to give to the server later
const port = 3000;
// Once the server has been configured, tell it to start listening to web traffic.
app.listen(port, () => {
    // This logged message will appear in the terminal, not the browser.
    console.log(`Example app listening on port http://localhost:${port}`);
});