import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bannar-title',
  templateUrl: './bannar-title.component.html',
  styleUrls: ['./bannar-title.component.css'],
})
export class BannarTitleComponent {
  @Input() title;

  constructor() {
    this.title = 'Title';
  }

  // ngOnInit(): void {}
}
