const express=require("express")
const bodyparser=require("body-parser");
const path= require("path");
const methodOverride = require('method-override');
const mongoose=require('mongoose');
const Task = require('./models/user')
const app=express()



mongoose.connect('mongodb://127.0.0.1:27017/task').then(()=>{
    console.log('conntected')
}).catch(()=>{
    console.log('disconnect')
})

 

//app.use(bodyparser.urlencoded({ extended: true}));

//app.use(express.json());
//app.use(bodyparser.urlencoded({ extended: false}));

app.set('view engine','ejs')
app.engine('ejs', require('ejs').__express);
app.set("views",'front');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));



  
app.get("/", async(req, res,next)=>{
    try{
    const todolists=await Task.find({})
    res.render("index.ejs", {todolist: todolists});
    
    }    
    catch(error){
        console.log('error');
    }      
    
});
// GET method for fetching task data for editing
app.get('/edit-todo/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).send('Task not found');
        }

        // Render your view or send the task data in the response
        res.render('edit-todo', { task: task }); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




//route for adding new task
app.post("/", async(req, res)=>{
    var newTask = new Task({
        name: req.body.task
    });
    try{
    await newTask.save()
    res.redirect('/');
    }
    catch(error){
        res.redirect("/")
    }
    


app.put('/edit-todo/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const { name } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(taskId, { name }, { new: true });

        if (!updatedTask) {
            return res.status(404).send('Task not found');
        }

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.delete('/:id',async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.redirect('/')
  }) 


    
app.listen(5009);
