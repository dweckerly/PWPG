import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  currentAction: any;
  actionChange: Subject<any> = new Subject<any>();

  constructor() {
    this.actionChange.subscribe(val => {
      this.currentAction = val;
    })
   }

   updateAction(action) {
     this.currentAction = action;
     this.actionChange.next(action);
   }
}
