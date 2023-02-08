const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next){
    res.status(200).json ({
        message:'Orders was created'
    })
});

router.post('/', function(req, res, next){
    res.status(201).json ({
        message:'Orders was created'
    })
});

router.get('/:orderId', function(req, res, next){
    res.status(200).json ({
        message:'Orders details',
        orderId: req.params.orderId
    })
});

router.delete('/:orderId', function(req, res, next){
    res.status(200).json ({
        message:'Orders deleted',
        orderId: req.params.orderId
    })
});

module.exports = router;