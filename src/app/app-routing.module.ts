import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EventsComponent } from './components/events/events.component';
import { InsightsComponent } from './components/insights/insights.component';
import { RosterComponent } from './components/roster/roster.component';

const routes: Routes = [
  {path: 'roster', component: RosterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'insights', component: InsightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
