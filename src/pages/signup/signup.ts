import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, App } from 'ionic-angular';
import {Camera,CameraOptions} from "@ionic-native/camera";
import {LocationPickerPage} from "../location-picker/location-picker";
import {HomePage} from '../home/home';


@Component({
  selector: 'signup-home',
  templateUrl: 'signup.html'
})
export class SignupPage {

  /** regex for phone number */
  mobileMask:any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ',' ', /\d/, /\d/, /\d/, ' ','-',' ', /\d/, /\d/, /\d/, /\d/];
  userMobile:any = null;

  /** regex for otp */
  otpMask:any[] = [ /[1-9]/,' ',/[1-9]/,' ',/[1-9]/,' ',/[1-9]/,' ',/[1-9]/,' ',/[1-9]/];
  userOTP:any = null;

  /** workplace models*/
  userWorkplace:any;

  /** user profile models */
  userName:string= null;
  userDesc:string = null;
  userPhoto:any=null;


  /** location models  */
  userWorkPlaceLocation = null;

  currentPage:number = 1; // set to one af
  maxPages:number= 2; 
  
  businesses:any[] = null;
  @ViewChild('signupSlides') slider:Slides;


 


  constructor(public navCtrl: NavController, private camera:Camera, private app: App) {
    //TODO: fetch businesses in the background and keep them ready

    this.businesses = new Array(15).fill({
      title: 'Some business',
      category : 'random',
      thumbnail: 'http://via.placeholder.com/64x75',
      selected:false
    })

    


  }

  ngAfterViewInit(){



    this.slider.freeMode = false;
    this.slider.lockSwipes(true);

  
    //TODO: remove after done ;


    
    
  }

  

  pager(){
    this.currentPage++;
  
  }

  getOtp(){
    //TODO: get send te mobile otp and continue to next slide
    this.userOTP = null;
    let phone = parseInt( this.userMobile.replace(/\D+/g, ''))
    this.slider.lockSwipes(false);
    this.slider.slideTo(1,500);
    this.slider.lockSwipes(true);
    this.currentPage = 2;
  }

  confirmOTP(){
    let otp = parseInt( this.userOTP.replace(/\D+/g, ''))
    this.slider.lockSwipes(false);
    this.slider.slideTo(2,500);
    this.slider.lockSwipes(true);
    this.currentPage = 3;
  }

  goBack(){
    this.slider.lockSwipes(false);
    this.slider.slideTo(0,500);
    this.slider.lockSwipes(true);
    this.currentPage = 1;
    this.userOTP = null;
    this.userName = null;
    this.userDesc = null;

  }

  saveProfile(){
    //TODO: save the user profile
    this.currentPage = 4;
    this.slider.lockSwipes(false);
    this.slider.slideTo(3,500);
    this.slider.lockSwipes(true);
  }

  selectWorkPlace(place){
    //TODO:
    this.userWorkplace = place;
  }
  saveWorkplace(workplace){

    this.userWorkplace = workplace;

    // get the current location of the user:

    this.navCtrl.push(LocationPickerPage,{
      title: "Which location?",
      backButtonText: 'Skip',
      doneButtonText: 'Done',
      searchBarText: 'Enter business location',
      callback:(loc)=>{
        return new Promise((resolve,reject)=>{
          if(loc)
          this.userWorkPlaceLocation = location;
           this.goToHome();
          resolve();
        })
        
      }
    })

  }
  skipWorkPlaceSelection(){
   this.goToHome();
  }

  goToHome(){
    setTimeout(()=>{
      this.navCtrl.push(HomePage);
    },500)
  }

  takePhoto(){
    debugger;
    let options:CameraOptions = {
      quality:100,
      cameraDirection:1,
      destinationType:0,
    }

    this.camera.getPicture(options).then(img=>{
      this.userPhoto = 'data:image/gif;base64,'+img;
    })
  }
}
