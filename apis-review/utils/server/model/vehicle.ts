
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    model:{
        type:String,
        required:true,
        max:15,
        min:5
    },
    brand:{
        type:String,
        required:true,
        max:15,
        min:5
    },

    owner:{
         type:Schema.Types.ObjectId,
         ref: 'Person'
    }

})

module.exports = mongoose.model('Vehicle', vehicleSchema)