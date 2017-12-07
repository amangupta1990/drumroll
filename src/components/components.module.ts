import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';  

import { PlacesAutoCompleteComponent } from './places-auto-complete/places-auto-complete';
import {  IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [PlacesAutoCompleteComponent],
	imports: [CommonModule,FormsModule, IonicModule],
	exports: [PlacesAutoCompleteComponent]
})
export class ComponentsModule {}
