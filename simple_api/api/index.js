var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/items', function (req, res, next) {
    var items = mocks.items.map(function (item) {
            return assign({}, item, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || items.length,
        offset = Number(req.query.offset) || 0;

    res.json(items.slice(offset, limit + offset))
});


router.post('/items', function (req, res, next) {
    var body = req.body;
    var item = {
        text: body.text,
        id: Date.now().toString(),
        user: body.user,
        date: new Date()
    };
    mocks.items.push(item);
    res.json(item)
});




router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;
