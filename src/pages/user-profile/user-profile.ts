import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {



  userProfileconfig = {
    left:{
      title:"drumrolls",
      value: 1
    },
    center:{
      displayName:'aman gupta',
      link: 'xyz',
      description: 'whassaaaaaaa',
      businessName: 'chic-fill-A',
      location: {}

    },
    right:{
      title:"categories",
      value:1
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
