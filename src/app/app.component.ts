import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Player } from './objects/player';
import { TimePeriod } from './objects/time/time-period';
import { GeneratorService } from './services/generator.service';
import { LocalStorageService } from './services/local-storage.service';
import { PlayerService } from './services/player.service';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent) headerComp: HeaderComponent;
  
  title = 'wrestle';
  introModal;
  player: Player = null;

  constructor(
    private playerService: PlayerService,
    private timeService: TimeService,
    private localStorageService: LocalStorageService,
    private generatorService: GeneratorService,
    private router: Router
    ) {}

  ngOnInit() {
    this.player = this.localStorageService.get("player")
    if(this.player !== null) {
      this.playerService.updatePlayerObject(this.player);
      this.router.navigateByUrl('/actions');
    }
  }

  ngAfterViewInit() {
    if(this.player === null) {
      this.introModal = document.getElementById("intro-modal");
      this.introModal.style.display = "block";
    }
  }

  initializeGame(name: string) {
    this.introModal.style.display = "none";
    let player = new Player(name, 100, 0, 0);
    this.playerService.updatePlayerObject(player);
    let startTime = new TimePeriod(1, 1, 1, 0);
    this.timeService.updateTime(startTime);
    let wrestlers = this.generatorService.generateWrestlers();
    this.localStorageService.set("wrestlers", wrestlers);
    location.reload();
  }
}
