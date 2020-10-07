var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function (req, res) {
  res.send('亞拉Yala');
});

// define the about route
router.get('/about', function (req, res) {
  res.send('關於亞拉Yala</br>' +
    '\n <img src="https://tw.appledaily.com/resizer/N7iyl-parNCuIA76K8ywcKFAAJc=/427x640/filters:quality(100)/cloudfront-ap-northeast-1.images.arcpublishing.com/appledaily/BKA4RVYRRFHR2SMOHTN4NWQU4E.jpg" height="60%">'
  );

});

module.exports = router;