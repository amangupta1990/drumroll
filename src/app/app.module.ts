import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { MyApp } from './app.component';
import { SignupPage } from '../pages/signup/signup';

import {MePage} from '../pages/home/me/me';
import {FriendsPage} from '../pages/home/friends/friends';
import {HomePage} from '../pages/home/home';
import {LocationPickerPage} from '../pages/location-picker/location-picker'
import {NguiMapModule} from '@ngui/map';
import {ComponentsModule} from '../components/components.module';

/** custom pipes */
import {PipesModule} from '../pipes/pipes.module'
/**directives */
import { TextMaskModule } from 'angular2-text-mask';

/**plugins */
import {Camera} from "@ionic-native/camera";
import {Geolocation} from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    LocationPickerPage,
    HomePage,
    MePage,
    FriendsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TextMaskModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places'}),
    ComponentsModule,
    PipesModule
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    LocationPickerPage,
    HomePage,
    MePage,
    FriendsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Keyboard,
    Geolocation
  ]
})
export class AppModule {}
