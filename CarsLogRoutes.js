const { Router } = require("express");
const { getCars, saveCar, deleteCar, editCar } = require("./CarsController");
const router = Router();

router.get('/', getCars);
router.post('/saveCar', saveCar);
router.post('/deleteCar', deleteCar);
router.post('/editCar', editCar);


module.exports = router;