import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: string[] = [];

  constructor(private generator: GeneratorService) { }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      this.contacts.push(this.generator.generateName());
    }
  }

}
