import { Component, OnInit } from '@angular/core';
import { RestApiService } from './service/rest-api.service';
import data from 'src/assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Account Information';
  options: string[] = ['One', 'Two', 'Three'];
  recentSearch: any[] = data;
  isSearchDone: boolean = false;
  foundSearch: any;

  constructor(private restApiService: RestApiService) {
    console.log(this.recentSearch);
  }

  ngOnInit(): void { }

  search(value: string) {
    this.isSearchDone = true;
    console.log('Search: ' + value);
    this.foundSearch = this.recentSearch
      .filter((item) => item.unique_id === value)
      .at(0);
    console.log(this.foundSearch);
  }

  clearSearch() {
    this.isSearchDone = false;
    this.foundSearch = undefined;
  }

  selectOption(value: string) {
    console.log('In app: ' + value);
  }
}
