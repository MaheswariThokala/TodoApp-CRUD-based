const mongoose=require('mongoose');
const marked=require('marked')
const userSchema=new mongoose.Schema({
    name:{
    type: String,
    required: true,
    }
});

module.exports = mongoose.model('Task', userSchema);