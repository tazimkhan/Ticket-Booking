import { Component } from '@angular/core';
import { TicketDetailsService } from'./ticket-details.service';
import { Info } from './models/info';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  info:Info[];
  // info: any[];
  constructor(private ticketDetailsService:TicketDetailsService ){}
  ngOnInit(){
    this.ticketDetailsService.getScrnFromDB().subscribe((info :Info[])=>{
      this.info= info;
      // console.log(this.info);
      // console.log(response)
    });
    }

    abc(){
      this.ticketDetailsService.getId(this.info[0]._id)
      this.ticketDetailsService.getScrn(this.info[0].screen);
    }

}
