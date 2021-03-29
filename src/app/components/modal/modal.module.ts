import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroModalComponent } from './intro-modal/intro-modal.component';



@NgModule({
  declarations: [IntroModalComponent],
  imports: [
    CommonModule
  ],
  exports: [IntroModalComponent]
})
export class ModalModule { }
