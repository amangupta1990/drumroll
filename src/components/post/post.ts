import { Component, Input } from '@angular/core';
import {FriendProfilePage} from '../../pages/friend-profile/friend-profile';
import {UserProfilePage} from '../../pages/user-profile/user-profile';
import { NavController,App } from 'ionic-angular';
/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  friendProfilePage = FriendProfilePage;
  userProfilePage = UserProfilePage;
  
  @Input('data') data:any;
  text: any = Date.now();

  constructor(private navCtrl:NavController, private appCtrl: App) {
    console.log('Hello PostComponent Component');
    
  }
  openFProfile(){
    this.appCtrl.getRootNav().push(FriendProfilePage);
  }

  openProfile(){
    this.appCtrl.getRootNav().push(UserProfilePage);
  }

}
