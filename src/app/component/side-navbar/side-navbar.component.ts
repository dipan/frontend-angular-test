import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MENU_LINKS } from './../../config/side-menu.config';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
  menuSidebar = MENU_LINKS;
  currentSection = MENU_LINKS[0].id ?? '';

  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {}

  showSubmenuEvent(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
