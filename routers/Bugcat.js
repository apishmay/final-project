let express = require('express');
let router = express.Router();
let Foamcat = require('./Foamcat.js');
let Capoo = require('./Capoo.js');
let Yala = require('./Yala.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Foamcat', Foamcat);
router.use('/Capoo', Capoo);
router.use('/Yala', Yala);

module.exports = router;