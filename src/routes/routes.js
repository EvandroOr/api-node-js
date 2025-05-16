const express = require('express'); 
const router = express.Router(); 

const EvandroRoutes = require("./routesEvandro");

router.use("/", EvandroRoutes);

module.exports = router;