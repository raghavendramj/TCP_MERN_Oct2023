let express = require("express");
let application = express();

application.get("/", (req, res) => {
    res.send("Hey Guys, Welcome to TheCodingPlanet!");
});

application.listen(8082);
