const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const Tutor = require('../models/Tutor');

//router test
router.get('/test', (req, res) => {
    res.send('OK');
});

// add pet via post
router.post('/add', (req, res) => {
    let {name, species, carry, weight, date_of_birth, tutor_id} = req.body;

    //insert
    Pet.create({
        name,
        species,
        carry,
        weight,
        date_of_birth,
        tutor_id
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});


//edit pet via put
router.put('/edit/:id', (req, res) => {
    let {name, species, carry, weight, date_of_birth } = req.body;
    const pet_id = req.params.id;
    
    //edit
    Pet.update({
        name,
        species,
        carry,
        weight,
        date_of_birth 
    },

    {where: 
        {id: pet_id}
    })
    .then(pets => {
        res.json('Edited'),{
          pets
    }})
    .catch(err => console.log(err));
    
});

//delete pet
router.delete('/delete/:id', (req,res) =>{
    const pet_id = req.params.id; 

    Pet.destroy(
        {where: 
            {id: pet_id}
        }
    )
    .then(result => {
        res.sendStatus(204)
    })
    .catch(err => console.log(err));
})

module.exports= router;