const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');
const PORT = process.env.PORT || 4000;
let app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have express use bodyparser, method override, routes, and the static public files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(process.cwd() + "/public"));
app.use("/", routes);

app.listen(PORT, () => {
	console.log("App listening on: " + PORT);
});