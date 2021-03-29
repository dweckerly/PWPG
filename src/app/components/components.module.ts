import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeekComponent } from './week/week.component';
import { EventsComponent } from './events/events.component';
import { RosterComponent } from './roster/roster.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InsightsComponent } from './insights/insights.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    TabsComponent,
    CalendarComponent,
    WeekComponent,
    EventsComponent,
    RosterComponent,
    ContactsComponent,
    InsightsComponent,
    ControlPanelComponent,
    HeaderComponent
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
    ContactsComponent,
    InsightsComponent,
    ControlPanelComponent,
    HeaderComponent,
    ModalModule
  ]
})
export class ComponentsModule { }
