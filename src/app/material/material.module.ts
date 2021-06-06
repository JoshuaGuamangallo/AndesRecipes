import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const importsMaterial = [
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatTableModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonModule,
  BrowserAnimationsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    importsMaterial
  ],
  exports:[
    importsMaterial
  ]
})
export class MaterialModule { }
