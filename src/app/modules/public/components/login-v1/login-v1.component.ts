import { Component } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-v1',
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login-v1.component.css'],
})
export class LoginV1Component {
  showPassword: boolean = false;
}
