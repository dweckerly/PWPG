import { AfterViewInit, Component } from '@angular/core';
import { GeneratorService } from './services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'wrestle';

  constructor(private generator: GeneratorService) {}

  ngAfterViewInit() {
    let introModal = document.getElementById("intro-modal")
    introModal.style.display = "block"
  }
}
