const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/key')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User}= require('./models/user');
mongoose.connect(config.mongoURI,
{   useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>console.log("Database connected"))
                       .catch(err=>console.error(err));



app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.post('/api/user/register',(req,res)=>{
    const user = new User(req.body)
    user.save((err,userData)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })
    
})



app.get('/',(req,res)=>{
    res.send('Hello World');
    console.log("working");
});


app.listen(5000);

