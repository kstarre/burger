const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override ?_method=DELETE or PUT
app.use(methodOverride("_method"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));