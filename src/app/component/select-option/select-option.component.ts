import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css'],
})
export class SelectOptionComponent implements OnInit {
  @Input() name: string = 'Select';
  @Input() options = ['1', '2'];

  @Output() selectOptionEvent = new EventEmitter<string>();

  selected: string;

  constructor() {
    this.selected = this.name;
    console.log(this.name);
    console.log(this.selected);
  }

  ngOnInit(): void {
    console.log('--------------- ngOnInit() ---------------');
    this.selected = this.name;
  }

  selectOption() {
    console.log(this.selected);
  }
}
