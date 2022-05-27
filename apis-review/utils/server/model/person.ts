import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name:{
        type:String,
        required:true,
        max:12,
        min:3
    },
    email:{
        type:String,
        required:true,
        max:30,
        min:5
    }
})

module.exports = mongoose.model('Person', personSchema);