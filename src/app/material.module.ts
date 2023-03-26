import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  exports: [MatCardModule, MatCommonModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {
  constructor() {
    console.log('AppModule constructor');
  }
}
