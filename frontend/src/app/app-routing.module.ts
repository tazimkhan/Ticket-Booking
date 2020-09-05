import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SeatDetailsComponent } from './seat-details/seat-details.component';
import { TicketBookComponent } from './ticket-book/ticket-book.component';
import { SeatInfoComponent } from './seat-info/seat-info.component';
const routes: Routes = [
  {path:'seatDetails',component: SeatDetailsComponent},
  {path:'ticketBooking',component:TicketBookComponent},
  {path:'seatInfo',component:SeatInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SeatDetailsComponent,
  TicketBookComponent,SeatInfoComponent]