const Ticket=require('../models/ticket');
const router=require('express').Router();
const bodyParser=require('body-parser');
const { urlencoded } = require('body-parser');

//middleware setUp
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/reserve',(req,res)=>{
    const newTkt=new Ticket({screen:req.body});
    newTkt.save().then((screenInfo)=>{
        res.send(screenInfo);
    })
})

router.patch('/updates/:id',(req,res)=>{
    Ticket.findOneAndUpdate({_id:req.params.id},{$set:{screen:req.body}}).then((screenInfo)=>{
        res.send(screenInfo);
    });

})

router.get('/seatInfo',(req,res)=>{
    Ticket.find().then((screenInfo)=>{
        res.send(screenInfo);
    })
})

module.exports=router;