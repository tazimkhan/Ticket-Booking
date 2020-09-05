import { Component, OnInit } from '@angular/core';
import { TicketDetailsService } from '../ticket-details.service'

@Component({
  selector: 'app-seat-info',
  templateUrl: './seat-info.component.html',
  styleUrls: ['./seat-info.component.css']
})
export class SeatInfoComponent implements OnInit {

  public bookSeat=[];
  constructor(private ticketDetailsService:TicketDetailsService) { }

  ngOnInit(): void {
    this.bookSeat=this.ticketDetailsService.reserveInfo();
    console.log('Reserve Seat Details');
    console.log(this.bookSeat);
  }

}
