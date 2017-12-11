import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';  

import { PlacesAutoCompleteComponent } from './places-auto-complete/places-auto-complete';
import {  IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from './hero-banner/hero-banner';
import { TimelineComponent } from './timeline/timeline';
import { PostComponent } from './post/post';

import {PipesModule} from '../pipes/pipes.module'
/** ng 2 3rd party stuff */
import { MomentModule } from 'angular2-moment';
import { ProfileBannerComponent } from './profile-banner/profile-banner';


@NgModule({
	declarations: [PlacesAutoCompleteComponent,
    HeroBannerComponent,
    TimelineComponent,
    PostComponent,
    ProfileBannerComponent],
	imports: [CommonModule,FormsModule, IonicModule, MomentModule, PipesModule],
	exports: [PlacesAutoCompleteComponent,
    HeroBannerComponent,
    TimelineComponent,
    PostComponent,
    ProfileBannerComponent]
})
export class ComponentsModule {}
