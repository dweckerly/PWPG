import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { GeneratorService } from 'src/app/services/generator.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})
export class ScoutComponent implements OnInit {
  action: any = this.getAction;

  constructor(private actionService: ActionService, private timeService: TimeService, private generatorService: GeneratorService) {}

  ngOnInit(): void {
    console.log(this.generatorService.generateWrestlers());
  }

  get getAction() {
    return this.actionService.currentAction;
  }

  generateWrestlers() {
    
  }
}
