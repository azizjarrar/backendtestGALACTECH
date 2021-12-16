const mongoose = require('mongoose');
const task = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    task:{type:String}
})
module.exports=mongoose.model('task',task)