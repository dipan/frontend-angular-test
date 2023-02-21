import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  heading: string = 'Recent Search Accounts';
  @Input() dataSource: any[] = [];
  @Output() searchEvent = new EventEmitter<string>();

  searchText: string;

  constructor() {
    this.searchText = '';
  }

  ngOnInit(): void {}

  search() {
    console.log(this.searchText);
    this.searchEvent.emit(this.searchText);
  }

  selectAccountNo(accountNo: number) {
    this.searchText = accountNo.toString();
    this.search();
  }
}
