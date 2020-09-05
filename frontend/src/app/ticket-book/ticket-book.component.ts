import { Component, OnInit } from '@angular/core';
import { TicketDetailsService } from '../ticket-details.service'
import { Info } from '../models/info'
@Component({
  selector: 'app-ticket-book',
  templateUrl: './ticket-book.component.html',
  styleUrls: ['./ticket-book.component.css']
})
export class TicketBookComponent implements OnInit {
  info:Info[]
  id;
  screen={};
  arr=new Map;
  constructor(private ticketDetailsService:TicketDetailsService){}
  ngOnInit(){
    this.id=this.ticketDetailsService.Id;
    this.screen=this.ticketDetailsService.scrn1;
    // console.log(this.id);
    console.log(this.screen);
  }

  reserveSeat(n){
    console.log('hello')
    console.log(this.screen)

    this.arr=this.ticketDetailsService.toBookSeat(n,this.screen);
    console.log(this.arr);
    this.ticketDetailsService.updateScrnInDB(this.id,this.screen).subscribe((info:Info[])=>{
      this.info=info;
    });
    this.ticketDetailsService.reserveSeatInfo(this.arr)

  }

}
