import { AfterViewInit, Component } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.component.html',
  styleUrls: ['../modal.scss', './intro-modal.component.scss']
})
export class IntroModalComponent implements AfterViewInit {
  nameInput;
  submitButton;
  
  constructor(private generator: GeneratorService) {}

  ngAfterViewInit() {
    this.nameInput = document.getElementById("name-input");
    this.submitButton = document.getElementById("start-btn")
  }

  inputListener(nameValue: string) {
    if(nameValue == "") {
      this.submitButton.disabled = true;
    }
    else {
      this.submitButton.disabled = false;
    }
  }

  suggestName() {
    let genNames = this.generator.generateOrgNames(1);
    this.nameInput.value = genNames[0];
    this.submitButton.disabled = false;
  }
}
