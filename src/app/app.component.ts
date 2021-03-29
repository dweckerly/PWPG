import { Component } from '@angular/core';
import { GeneratorService } from './services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wrestle';

  constructor(private generator: GeneratorService) {
    console.log(generator.generateOrgNames());
  }
}
