import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  userForm = this.formBuilder.group({
    accountNo: ['123'],
    name: ['Account 123'],
  });
}
