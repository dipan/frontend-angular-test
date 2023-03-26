import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css'],
})
export class FilterTypeComponent implements OnInit {
  @Input() type: string = 'All';
  @Input() count: number = 0;
  @Input() selected: boolean = false;
  @Output() selectEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  select() {
    this.selected = true;
    this.selectEvent.emit(this.type);
  }
}
