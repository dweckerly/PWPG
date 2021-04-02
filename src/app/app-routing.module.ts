import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './components/actions/actions.component';
import { ScoutComponent } from './components/actions/scout/scout.component';
import { AssetsComponent } from './components/assets/assets.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EventsComponent } from './components/events/events.component';
import { RosterComponent } from './components/roster/roster.component';

const routes: Routes = [
  {path: 'actions', component: ActionsComponent},
  {path: 'scout', component: ScoutComponent},
  {path: 'roster', component: RosterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'assets', component: AssetsComponent},
  {path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
