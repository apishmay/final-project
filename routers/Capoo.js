var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function (req, res) {
  res.send('咖波Capoo');
});

// define the about route
router.get('/about', function (req, res) {
  res.send('關於咖波Capoo</br>' +
    '\n <img src="data:image/jpeg;base64,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" height="30%">'
  );
});

module.exports = router;