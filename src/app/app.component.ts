import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Player } from './objects/player';
import { GeneratorService } from './services/generator.service';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) headerComp: HeaderComponent;
  title = 'wrestle';
  introModal;
  constructor(private generator: GeneratorService, private playerService: PlayerService) {}

  ngAfterViewInit() {
    this.introModal = document.getElementById("intro-modal");
    this.introModal.style.display = "block";
  }

  onStart(name: string) {
    this.introModal.style.display = "none";
    this.playerService.updatePlayerObject(new Player(name, 100, 0, "Micro-enterprise"))
  }
}
