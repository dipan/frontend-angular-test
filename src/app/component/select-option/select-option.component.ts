import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css'],
})
export class SelectOptionComponent implements OnInit {
  @Input() name: string = 'Select';
  @Input() options: {
    name: string;
    value: any;
    [key: string]: any;
  }[] = [
    {
      name: 'One',
      value: 1,
    },
    {
      name: 'Two',
      value: 2,
    },
  ];

  @Output() selectOptionEvent = new EventEmitter<string>();

  selected: any;

  constructor() {
    this.selected = this.name;
    console.log(this.name);
    console.log(this.selected);
  }

  ngOnInit(): void {
    console.log('--------------- ngOnInit() ---------------');
    this.selected = this.name;
  }

  onChange() {
    console.log(this.selected);
    console.log(this.selected.name);
    console.log(this.selected.value);
    this.selectOptionEvent.emit(this.selected);
  }
}
