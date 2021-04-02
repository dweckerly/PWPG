import { Component, OnInit } from '@angular/core';
import { ACTIONS } from 'src/app/data/actions.data';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actions = ACTIONS;
  activeAction = "Scout";

  constructor() { }

  ngOnInit(): void {
  }

  showAction(name: string) {
    this.activeAction = name;
  }

}
