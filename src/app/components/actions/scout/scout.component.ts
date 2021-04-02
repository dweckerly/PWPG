import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})
export class ScoutComponent implements OnInit {

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
  }

}
