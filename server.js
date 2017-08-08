const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override ?_method=DELETE
app.use(methodOverride("_method"));