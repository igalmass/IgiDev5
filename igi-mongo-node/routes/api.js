const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', function (req, res, next) {
    // // find all the ninjas
    // Ninja.find({}).then(function(ninjas){
    //   res.send(ninjas);
    // });
    const lng = req.query.lng;
    const lat = req.query.lat;
    console.log(`lng = ${lng} / ${lat}`);
    Ninja.geoNear(
            { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
            { maxDistance: 100000, spherical: true })
         .then(ninjas => {
            res.send(ninjas);
    });

    res.send({type: 'GET'});
});

router.post('/ninjas', function (req, res, next) {
    //console.log(req.body);
    Ninja
        .create(req.body)
        .then(function (ninja) {
            res.send(ninja);

        }).catch(next);

});

router.put('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndUpdate(
        {_id: req.params.id}, req.body).//then(oldNinja => res.send(ninja));
    then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja);
        })
    })
    //res.send({type: 'PUT'});
});

router.delete('/ninjas/:id', function (req, res, next) {
    console.log(req.params.id);
    Ninja.findByIdAndRemove(
        {_id: req.params.id}).then(function (ninja) {
        res.send(ninja);
    });
});

module.exports = router;
