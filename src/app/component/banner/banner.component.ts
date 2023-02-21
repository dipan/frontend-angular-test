import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  accountNo: number = 0;
  name: string = '';
  phoneNo: string = '';
  lastUpdatedOn: string = '';
  @Input() bannerData: any;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  search(value: string) {
    console.log('Search: ' + value);
  }

  closeBanner() {
    this.close.emit();
  }
}
