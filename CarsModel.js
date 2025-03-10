const mongoose = require("mongoose");


const carsSchema = new mongoose.Schema({
  
    title: {
        type: mongoose.Schema.Types.Mixed,
        validate: {
            validator : function (value){
                return typeof value === 'string' || typeof value ==="number";
            },
            message: "Value must be a string and number"
        },
        required: true
        
    }
})

module.exports = mongoose.model('Cars', carsSchema)