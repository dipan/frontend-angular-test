import { Component, OnInit } from '@angular/core';

type TableData = {
  headers: string[];
  data: any[];
};

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.css'],
})
export class TableGenericComponent implements OnInit {
  dataSource: TableData;

  constructor() {
    this.dataSource = {
      headers: ['Key 1', 'Key 2'],
      data: [['Value 1', 'Value2']],
    };
  }
  ngOnInit(): void {}
}
