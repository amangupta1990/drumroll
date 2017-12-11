import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Tabs } from 'ionic-angular';
import {MePage} from './me/me';
import {FriendsPage} from './friends/friends';
import {UserProfilePage} from '../user-profile/user-profile';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('tabs') tabs:Tabs;

  /** tab pages */
  mePageRoot = MePage;
  friendsPageRoot = FriendsPage;
  userProfilePage = UserProfilePage;


 /**view vars*/
 activeTab = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // set the me page as the default 
    this.tabs.select(1);
  
  }

  setActiveTab(tab){
    this.activeTab = tab.index;
  }



}
