import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeekComponent } from './week/week.component';
import { EventsComponent } from './events/events.component';
import { RosterComponent } from './roster/roster.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from './modal/modal.module';
import { ActionsComponent } from './actions/actions.component';
import { AssetsComponent } from './assets/assets.component';
import { BusinessLevelPipe } from '../pipes/business-level.pipe';
import { EmployeesComponent } from './employees/employees.component';
import { ScoutComponent } from './actions/scout/scout.component';
import { BookComponent } from './actions/book/book.component';

@NgModule({
  declarations: [
    TabsComponent,
    CalendarComponent,
    WeekComponent,
    EventsComponent,
    RosterComponent,
    ControlPanelComponent,
    HeaderComponent,
    ActionsComponent,
    AssetsComponent,
    BusinessLevelPipe,
    EmployeesComponent,
    ScoutComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    TabsComponent,
    CalendarComponent,
    WeekComponent,
    EventsComponent,
    RosterComponent,
    ControlPanelComponent,
    HeaderComponent,
    ModalModule
  ]
})
export class ComponentsModule { }
