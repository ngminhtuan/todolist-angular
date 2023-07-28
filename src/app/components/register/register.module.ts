import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FocusDirective } from '../../directives/focus.directive';

@NgModule({
  declarations: [
    RegisterComponent,
    FocusDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }