import { Component, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { SignupPage } from '../pages/signup/signup';
import {HomePage} from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignupPage;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , private ele: ElementRef, private kboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngAfterViewInit(){
    // to hide buttons whenn inputs are focused on:
    if(!this.platform.is('ios')){
      // add a style sheet :

      let style = document.createElement("style");
      style.id = "dynamicstyles";
      style.innerText = `
        .back,.continue, .button-container-fixed{display:none!important};
      `;

     

      this.kboard.onKeyboardShow().subscribe(()=>{
        document.head.appendChild(style);
      })


      this.kboard.onKeyboardHide().subscribe(()=>{
        document.head.querySelector('#dynamicstyles').remove();
      })

    }

  }



}


