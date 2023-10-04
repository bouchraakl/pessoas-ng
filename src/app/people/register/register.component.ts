import { Component } from '@angular/core';
import { Person } from '../person';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  newPerson: Person = { name: '', age: 0, phone: '' };

  constructor(private dataService: DataService) {}

  registerPerson() {
    this.dataService.addPerson(this.newPerson);
    this.newPerson = { name: '', age: 0, phone: '' }; 
  }
}
