const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'GET'
    });
});

router.get('/:id_product', (req, res) => {
    const id = req.params.id_product
    
    res.status(200).send({
        message: 'GET pelo ID: ' + id,
    });
});

router.post('/', (req, res) => {

    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).send({
        message: 'POST',
        productCreated: product
    });
});

router.put('/', (req, res) => {
    res.status().send({
        message: 'PUT'
    });
});

router.delete('/', (req, res) => {
    message: 'Delete'
});


module.exports = router;