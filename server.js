const express = require("express");
const handle = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require routes and use them
const routes = require("./controllers/burgerController")
app.use(routes)

app.listen(PORT, function(){
    console.log(`Listening on: http://localhost:${PORT}`);
});