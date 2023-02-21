import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
})
export class CustomSidenavComponent implements OnInit {
  options: string[] = [];
  collapse: boolean = false;
  @Input() sidenavData: any;

  selectedOption: number;

  constructor() {
    console.log(this.sidenavData);
    // this.sidenavData.items.items.forEach((element: any) => {
    //   this.options.push(element.title);
    // });
    this.selectedOption = 1;
  }

  ngOnInit(): void {
    console.log('CustomSidenavComponent -> ngOnIt');
    console.log(this.sidenavData);
    // this.sidenavData.items.items.forEach((element: any) => {
    //   this.options.push(element.title);
    // });
    console.log(this.options);
  }

  selectOption(i: number) {
    this.selectedOption = i;
  }

  collapseSubMenu(hasSubMenu: boolean) {
    if (hasSubMenu) {
      this.collapse = !this.collapse
    }
  }
}
