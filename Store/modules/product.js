const mongoose = require('mongoose')

const TaskShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Must Provide Your Name"],
        trim:true,
        maxlength:[20,'ame cannot be more than 20']
    },
    completed:{
        type:Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskShema)