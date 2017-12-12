import { Component, ViewChild, ChangeDetectorRef, Renderer } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation,  Geoposition, } from '@ionic-native/geolocation';
import { NguiMapComponent, CustomMarker } from '@ngui/map';
import { PlacesAutoCompleteComponent } from '../../components/places-auto-complete/places-auto-complete';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
/**
 * Generated class for the SendLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-location-picker',
  templateUrl: 'location-picker.html',
})
export class LocationPickerPage {

  /** view vars used by ngui-maps */
  autocomplete: any;
  address: any = {};
  center: any = "";
  code: string;
  err: any;
  canContinue = false;
  private callback:any;
  private selectedPlace: any = null;

  /** config vars received from navCtrl */
  title:string ='';
  backButtonText:string = 'Cancel';
  doneButtonText:string = 'Done';
  searchBarText:string = 'Enter a name, place or business';

  @ViewChild('searchBar') searchBar: PlacesAutoCompleteComponent;
  @ViewChild('map') map: NguiMapComponent;
  @ViewChild('marker') marker: CustomMarker

  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams,  private changeDetector: ChangeDetectorRef, private render: Renderer, private geo:Geolocation, private revGeo:NativeGeocoder) {

    // register the callback 
    this.callback = navParams.data.callback;
    this.backButtonText = navParams.data.backButtonText;
    this.doneButtonText = navParams.data.doneButtonText;
    this.searchBarText = navParams.data.searchBarText;
    this.title = navParams.data.title;

    




  }



  placeChanged(place) {
    if (place.description) {
      this.center = place.description;
      this.address = place.description;
      this.selectedPlace = place;
      this.canContinue = true;
    }
    else {
      this.center = ""
      this.address = "";
      this.selectedPlace = null;
      this.canContinue = false;
    }

    this.changeDetector.detectChanges();
  }


  ngAfterViewInit() {
    this.render.invokeElementMethod(this.searchBar.input.nativeElement, 'focus', []);
    debugger;
    this.geo.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.revGeo.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
      .then((result: NativeGeocoderReverseResult) => {
        
        console.log(JSON.stringify(result))
        
        this.center= result.locality+", "+result.countryName;
      }
      )
      .catch((error: any) => console.log(error));
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  confirm() {
    // send back the current 
    this.callback(this.selectedPlace)
        .then(()=>{
          this.navCtrl.pop();
        })

  }

  goBack(){
    this.callback(null).then(()=>{
      this.navCtrl.pop();
    })
  }

}
