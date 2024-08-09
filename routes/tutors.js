const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');
const Pet = require('../models/Pet');

//router test
router.get('/test', (req, res) => {
    res.send('OK');
});

// add tutor via post
router.post('/add', (req, res) => {
    let {name, phone, email, date_of_birth, zip_code } = req.body;

    //insert
    Tutor.create({
        name,
        phone,
        email,
        date_of_birth,
        zip_code
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

// list tutor and pet via get
router.get('/list', (req, res) => {
    Promise.all([Tutor.findAll(), Pet.findAll()])

        .then(([tutors, pets]) => {
            tutors.forEach(tutor => {
                tutor.dataValues.pets = pets.filter(pet => pet.tutor_id === tutor.id)
            });
            res.json(tutors);
        }
        )
        .catch(err => console.log(err));
});


//edit tutor via put
router.put('/edit/:id', (req, res) => {
    let {name, phone, email, date_of_birth, zip_code } = req.body;
    const tutor_id = req.params.id;
    
    //edit
    Tutor.update({
        name,
        phone,
        email,
        date_of_birth,
        zip_code  
    },

    {where: 
        {id: tutor_id}
    })
    .then(tutors => {
        res.json('Edited'),{
          tutors
    }})
    .catch(err => console.log(err));
    
});

//delete tutor
router.delete('/delete/:id', (req,res) =>{
    const tutor_id = req.params.id;

    Pet.destroy(
        {where: 
            {tutor_id: tutor_id}
        }
    )
    .then(() => {
        return Tutor.destroy(
            {where:    
            {id: tutor_id}
            },
            res.sendStatus(204)
        )
    })
    .catch(err => console.log(err));
})
    
module.exports= router;