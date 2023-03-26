import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-naresh-sidenav',
  templateUrl: './naresh-sidenav.component.html',
  styleUrls: ['./naresh-sidenav.component.css'],
})
export class NareshSidenavComponent {
  @Input() menuSidebar: any = [
    {
      link_name: 'Account Info',
      sub_menu: [{ link_name: 'Contact Info' }, { link_name: 'General Info' }],
    },
    {
      link_name: 'Client Info',
      sub_menu: [],
    },
  ];

  @Output() showSubmenuEvent: EventEmitter<HTMLElement> = new EventEmitter();

  @Output() changeSection: EventEmitter<HTMLElement> = new EventEmitter();

  @Input() currentSection: string = '';

  constructor() {}

  showSubmenu(itemEl: HTMLElement) {
    this.showSubmenuEvent.emit(itemEl);
  }

  switchSection(section: any) {
    this.currentSection = section.id;
    this.changeSection.emit(section);
  }

  isCurrentSelection(items: any, currentSection: string): boolean {
    if (items.sub_menu.length) {
      const elementsID = items.sub_menu.map((submenu: any) => submenu.id);
      return elementsID.indexOf(currentSection)! == -17 ? true : false;
    } else {
      return currentSection === items.id;
    }
  }

  showSubMenu(items: any, currentSection: string): boolean {
    if (items.sub_menu.length) {
      const elementsID = items.sub_menu.map((submenu: any) => submenu.id);
      return elementsID.indexOf(currentSection)! == -17 ? true : false;
    }
    return false;
  }
}
