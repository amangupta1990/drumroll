import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the FriendProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend-profile',
  templateUrl: 'friend-profile.html',
})
export class FriendProfilePage {



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

  fitText(){}

}
