const mongoose=require('mongoose');

const ticketSchema= new mongoose.Schema({
    
    screen:{
        type:Object,
        required:true
    }
})

const Ticket=mongoose.model('Tickets',ticketSchema);

module.exports= mongoose.model('Tickets')