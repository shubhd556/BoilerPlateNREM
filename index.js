const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoConnection = 'mongodb+srv://admin:admin@cluster0.idv1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoConnection,
{   useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=>console.log("connected"))
                       .catch(err=>console.error(err));
app.get('/',(req,res)=>{
    res.send('Hello World');
    console.log("working");
});


app.listen(5000);

