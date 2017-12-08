import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';  

import { PlacesAutoCompleteComponent } from './places-auto-complete/places-auto-complete';
import {  IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from './hero-banner/hero-banner';
import { TimelineComponent } from './timeline/timeline';
import { PostComponent } from './post/post';

@NgModule({
	declarations: [PlacesAutoCompleteComponent,
    HeroBannerComponent,
    TimelineComponent,
    PostComponent],
	imports: [CommonModule,FormsModule, IonicModule],
	exports: [PlacesAutoCompleteComponent,
    HeroBannerComponent,
    TimelineComponent,
    PostComponent]
})
export class ComponentsModule {}
