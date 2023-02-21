import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() badgeText: string;
  @Input() backgroudColor: string = '#ad65f1';

  constructor() {
    this.badgeText = 'Badge';
  }

  ngOnInit(): void {
  }

}
