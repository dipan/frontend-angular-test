import { Component, OnInit, Input } from '@angular/core';

interface AddressInfo {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

interface ContactInfo {
  homePhone: string;
  cellPhone: string;
  office: string;
  email: string;
}

interface AccountInfo {
  title: string;
  addressInfo: AddressInfo;
  contactInfo: ContactInfo;
  accountType: string;
  accountDescription: string;
  accountTitle: string;
  usTaxId: string;
  primaryIp: string;
}

@Component({
  selector: 'app-banner-v1',
  templateUrl: './banner-v1.component.html',
  styleUrls: ['./banner-v1.component.css'],
})
export class BannerV1Component implements OnInit {
  @Input() bannerData: AccountInfo;
  constructor() {
    this.bannerData = {
      title: 'RETAIL-INDIVIDUAL',
      addressInfo: {
        line1: 'YARAB SAHAJAHAN',
        line2: '1 PRESTIGE',
        line3: '1 PRESTIGE',
        city: 'JERSEY',
        state: 'US',
        country: 'US',
        zipcode: '123456-789',
      },
      contactInfo: {
        homePhone: '(123)1234 123 123',
        cellPhone: '(123)1234 123 123',
        office: '(123)1234 123 123',
        email: 'abc@def.com',
      },
      accountType: 'Normal',
      accountDescription: 'Normal Account',
      accountTitle: 'NORMAL ACCOUNT',
      usTaxId: 'NA',
      primaryIp: 'NA',
    };
  }

  ngOnInit() {}
}
