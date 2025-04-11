const express = require('express'); 
const router = express.Router(); 

const infsJogoController = require('../controllers/infsJogo'); 

router.get('/infsJogo', infsJogoController.listarInfsJogo); 
router.post('/infsJogo', infsJogoController.cadastrarInfsJogo); 
router.patch('/infsJogo', infsJogoController.editarInfsJogo); 
router.delete('/infsJogo', infsJogoController.apagarInfsJogo); 

module.exports = router;