import { Component, OnInit } from '@angular/core';
import { ACTIONS } from 'src/app/data/actions.data';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actions = ACTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
