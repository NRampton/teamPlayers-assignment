const express = require('express');
const bp = require('body-parser');
const path = require('path');
module.exports = function(app) {
    app.use(bp.json());
    app.use(express.static(path.resolve(__dirname,'..','..','publics','dist')));
}
