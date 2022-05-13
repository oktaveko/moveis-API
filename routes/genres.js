const validateObjectId = require('../middleware/validateObjectId');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Genre, validate} = require('../models/genre');



router.get('/', async (req,res) => {
    const genres = await Genre.find().sort('name'); 
    res.send(genres);
});

router.post('/', auth, async (req,res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre =new Genre({name: req.body.name});
    await genre.save();
    
    res.send(genre);
});

router.put('/:id',auth, async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name}, {
        new: true
    })

    // const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The genre doesn't exist");
    
    res.send(genre);
});

router.delete('/:id', [auth, admin], async(req,res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    // const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The genre doesn't exist");
    
    res.send(genre);
});

router.get('/:id', validateObjectId, async (req,res) =>{
    const genre = await Genre.findById(req.params.id);

    // const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The genre doesn't exist");
    
    res.send(genre);
});


module.exports = router;