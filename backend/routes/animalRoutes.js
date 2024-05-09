const express = require('express')
const {createAnimal, getAllAnimals,UpdateAnimalById,DeleteAnimalById} = require('../controllers/animalControllers')

const router = express.Router();

router.post('/create-animal',createAnimal);
router.get('/get-all-animals',getAllAnimals);
router.put('/update-animal-by-id/:animalid',UpdateAnimalById);
router.delete('/delete-animal-by-id/:animalid',DeleteAnimalById);


module.exports = router;