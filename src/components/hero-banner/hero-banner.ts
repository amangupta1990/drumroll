import { Component, ViewChild, ElementRef, Input, Output,  EventEmitter  } from '@angular/core';

/**
 * Generated class for the HeroBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero-banner',
  templateUrl: 'hero-banner.html'
})
export class HeroBannerComponent {
  @ViewChild('cashcontainer') cashcontainer:ElementRef;

  /** banner configs */
  @Input('config') config:{
    left:{
       title:string;
       value:string
    },
    center:{
      title:string,
      value:string,
    },
    right:{
      title:string,
      value:string
    }
  }  

  /** banner events */
  @Output('onLeftSideClicked') _leftSideClicked:EventEmitter<any> = new EventEmitter<any>(); 
  @Output('onCenterClicked') _centerClicked:EventEmitter<any> = new EventEmitter<any>(); 
  @Output('onRightSideClicked') _rightSideClicked:EventEmitter<any> = new EventEmitter<any>(); 


  constructor() {
    console.log('Hello HeroBannerComponent Component');
    

    // to be run when values are updated
    
  }

  ngAfterViewInit(){
    this.fitText();
  }

  // track changes in input and perform a fit text
  ngOnChanges(changes){
    if(changes.config){
      setTimeout(()=>{
        this.fitText();
      }, 0);
      
    }
  }

  fitText(){
    let text = this.cashcontainer.nativeElement.innerText;

    switch(text.length >=4){
      case true:{
        this.cashcontainer.nativeElement.style.fontSize = '50px';
        this.cashcontainer.nativeElement.style.marginTop = '40px';
        break;
      }

      case false:{
        this.cashcontainer.nativeElement.style.fontSize = '78px';
        this.cashcontainer.nativeElement.style.marginTop = '20px';
      }
    }
  }

  centerClicked(){
    this._centerClicked.emit()
  }
  
  leftSideClicked(){
    this._leftSideClicked.emit();
  }

  rightSideclicked(){
    this._rightSideClicked.emit();
  }

}
