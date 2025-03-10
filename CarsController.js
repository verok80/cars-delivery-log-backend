const CarsModel = require('./CarsModel');


module.exports.getCars = async(req, res) => {
    const myCar = await CarsModel.find();
    res.send(myCar)
}
 module.exports.saveCar = async (req, res) => {
    const { year, title } = req.body;
    CarsModel.create({year, title})
    .then((data) => {console.log("Car is added")
        res.send(data)
    })
 }

 module.exports.deleteCar = async (req, res) => {
    const { _id } = req.body;
    CarsModel.findByIdAndDelete(_id)
    .then(() => res.send("Car is deleted"))
 }

 module.exports.editCar = async(req, res) => {
    const { _id, year,title } = req.body;
    CarsModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Car is updated'))
 }