import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
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
      location: ""

    },
    right:{
      title:"categories",
      value:1
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo:Geolocation, private revGeo:NativeGeocoder) {
  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.revGeo.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
      .then((result: NativeGeocoderReverseResult) => {
        
        console.log(JSON.stringify(result))
        
        this.userProfileconfig.center.location = result.locality+", "+result.countryName;
      }
      )
      .catch((error: any) => console.log(error));
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
