import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() buttonText: string;
  @Output() searchEvent = new EventEmitter<string>();
  searchText: string;
  isError: boolean = true;
  errorMessage: string = 'NA';

  constructor() {
    this.buttonText = 'NA';
    this.searchText = '';
  }
  ngOnInit(): void {}

  search() {
    this.searchEvent.emit(this.searchText);
  }

  keyupEvent(event: any) {
    console.log(event);
    this.search();
  }

  displayError() {
    this.errorMessage = 'Display error message for 10 seconds';
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 10000);
  }
}
