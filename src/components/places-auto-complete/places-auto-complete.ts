import { Component,Input,Output , EventEmitter, ViewChild,ElementRef} from '@angular/core';
declare var google:any;
import {Subject} from 'rxjs'
/**
 * Generated class for the PlacesAutoCompleteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'places-auto-complete',
  templateUrl: 'places-auto-complete.html'
})
export class PlacesAutoCompleteComponent {

  private acService:any;
  public autocompleteItems:any[] = [];
  private autocomplete:any ={};

  public Input = new Subject<string>();

  @Input('center') center:any;
  @Output('placeChanged')  placeChanged: EventEmitter<any>;
  @ViewChild('input') input:ElementRef;

  constructor() {
    console.log('Hello PlacesAutoCompleteComponent Component');
    this.placeChanged = new EventEmitter<any>();


    // add a debounce time to the input 
    this.Input
    .map((event:any) => event.target.value)
    .debounceTime(100)
    .distinctUntilChanged()
    .subscribe(val=>{
      this.updateSearch(val)
    });

  }

  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();        
    this.autocompleteItems = [];
    this.autocomplete = {
        query: ''
    };        
}

updateSearch(event) {
  //console.log('modal > updateSearch');
  if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
      
  }
  let self = this;
  //console.log("Update Search", this.userLat, this.userLng);
  let config = { 
    location: new google.maps.LatLng(this.center.lat, this.center.lng),
    radius: 1000,
      //componentRestrictions: { country: 'US' },
      //types:  ['geocode', 'establishment', 'regions', 'cities'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query //componentRestrictions: { country: 'AR' } 
  }
  this.acService.getPlacePredictions(config, function (predictions, status) {
      //console.log('modal > getPlacePredictions > status > ', status);
      self.autocompleteItems = [];            
      if(status == 'OK'){
          if(predictions){
              predictions.forEach(function (prediction) {              
                  self.autocompleteItems.push(prediction);
              });
          }                
      }
      
  });
}

chooseItem(item: any) {
  
  this.placeChanged.emit(item);
 this.autocomplete.query = item.description;
  this.autocompleteItems = [];
}

}
