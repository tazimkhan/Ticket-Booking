import { Component, OnInit } from '@angular/core';
import { TicketDetailsService } from '../ticket-details.service'
@Component({
  selector: 'app-seat-details',
  templateUrl: './seat-details.component.html',
  styleUrls: ['./seat-details.component.css']
})
export class SeatDetailsComponent implements OnInit {

  constructor(private ticketDetailsService:TicketDetailsService) { }
  ngOnInit() {
    // console.log('hlw')
    // console.log(this.scrn);
    // this.bookSeat=this.ticketDetailsService.reserve;
    
    // console.log(' i m in seat details');
    // console.log(this.bookSeat)
  }
  
  public f=[1,2,3]
  public bookSeat;
  see(){
   
   this.bookSeat=this.ticketDetailsService.reserve;
   console.log (this.bookSeat)
  }
}
