let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200);
    res.json({actions: res.actions, clientInfo: req.rawHeaders, cookies: req.cookies});
});

module.exports = router;
