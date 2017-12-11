import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  bannerConfig = {
    left:{
      title:"drumrolls",
      value: 1
    },
    center:{
      title:"balance",
      value:50,
    },
    right:{
      title:"categories",
      value:1
    }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}
