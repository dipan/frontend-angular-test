import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-root',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  title = 'Account Information';
  options: string[] = ['One', 'Two', 'Three'];
  isSearchDone: boolean = false;
  foundSearch: any;

  constructor() {}

  ngOnInit(): void {}
}
