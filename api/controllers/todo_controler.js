const task_collection = require("../models/task");
const validator = require('../../globalfn/validator')
const Mongoose = require("mongoose");

exports.add=(req,res)=>{
    const {task}=req.body;
    if(validator(req.body,["task"],res)){return}
    Task = new task_collection({
      _id: new Mongoose.Types.ObjectId(),
      task,
    });
    Task.save({task}).then((result)=> {res.status(res.statusCode).json({message: "task saved",result})
    }).catch(error=>{
        res.status(res.statusCode).json({
          message: error.message,
          error:true
        });
      })
}
exports.get=(req,res)=>{
  task_collection.find().then((result)=> {res.status(res.statusCode).json({message: "tasks",result})
    }).catch(error=>{
        res.status(res.statusCode).json({
          message: error.message,
          error:true
        });
      })
}
exports.delete=(req,res)=>{
    if(validator(req.body,["id"],res)){return}
    task_collection.findOneAndRemove({_id:Mongoose.Types.ObjectId(req.body.id)}).then((result)=> {res.status(res.statusCode).json({message: "tasks was removed"})
    }).catch(error=>{
        res.status(res.statusCode).json({
          message: error.message,
          error:true
        });
    })
}
exports.update=(req,res)=>{

    if(validator(req.body,["id"],res)){return}
    const task = req.body.task;

    task_collection.findOneAndUpdate({_id:Mongoose.Types.ObjectId(req.body.id)},{ $set: {task:task} }).then((result)=> {res.status(res.statusCode).json({message: "tasks was updated"})
    }).catch(error=>{
        res.status(res.statusCode).json({
          message: error.message,
          error:true
        });
    })
}