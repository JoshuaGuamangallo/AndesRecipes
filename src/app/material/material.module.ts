import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const importsMaterial = [
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatTableModule,
  MatSlideToggleModule
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
