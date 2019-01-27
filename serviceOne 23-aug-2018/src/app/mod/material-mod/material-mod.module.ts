import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule , MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
     FlexLayoutModule, MatCardModule
  ],
 exports: [
  MatButtonModule, MatFormFieldModule , MatInputModule, MatSelectModule,
   FlexLayoutModule, MatCardModule
 ]
})
export class MaterialModModule { }
