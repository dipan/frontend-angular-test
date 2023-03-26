import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css'],
})
export class InformationCardComponent implements OnInit {
  @Input() information: any;
  title: string;
  subTitle: string;
  cardInformation: any;
  actions: string[] = ['Overview', 'Balances', 'Holdings', 'Activity'];

  constructor() {
    this.information = {
      title: 'Title (Desc)',
      subTitle: '',
      key1: 'value1',
      key2: 'value1',
      key3: 'value1',
      'long key': 'value1',
    };
    const { title, subTitle, ...cardInformation } = this.information;
    this.title = title;
    this.subTitle = subTitle;
    this.cardInformation = cardInformation;
    for (const key in this.cardInformation) {
      if (Object.prototype.hasOwnProperty.call(this.cardInformation, key)) {
        const value = this.cardInformation[key];
        console.log(key + ': ' + value);
      }
    }
  }

  ngOnInit(): void {}
}
