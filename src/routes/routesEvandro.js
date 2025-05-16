const express = require('express'); 
const router = express.Router(); 

const infsJogoController = require('../controllers/infsJogo'); 

router.get('/infsJogo', infsJogoController.listarInfsJogo); 
router.post('/infsJogo', infsJogoController.cadastrarInfsJogo); 
router.patch('/infsJogo/:id', infsJogoController.editarInfsJogo); 
router.delete('/infsJogo/:id', infsJogoController.apagarInfsJogo); 

module.exports = router;