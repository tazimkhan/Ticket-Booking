
const express=require('express');
const morgan=require('morgan');
const app=express();
const cors=require('cors');
const port = process.env.PORT;
const database=require('./database');
const ticketController=require('./controller/ticket');

//middleware setup
app.use(morgan('dev'));
app.use(cors());


//app route
app.use('',ticketController)



//default routes
app.all('/',function(req,res){
    return res.json({
        status : true,
        message : 'Index page working ...'
    });
});


//listener
app.listen(3000,()=>{console.log('server is run')});