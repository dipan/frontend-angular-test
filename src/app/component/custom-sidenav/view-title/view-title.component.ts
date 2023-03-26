import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.css'],
})
export class ViewTitleComponent implements OnInit {
  @Input() title;

  constructor() {
    this.title = 'Title';
  }

  ngOnInit(): void {}
}
