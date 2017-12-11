import { Component } from '@angular/core';



/**
 * Generated class for the TimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  friendProfile = FriendProfilePage;
  posts = new Array(6).fill(null).map((post,i)=>{
    return {
      created: Date.now(),
      me: i <= 3 ? true : false

    }
  })
  constructor() {
    console.log('Hello TimelineComponent Component');
    this.text = 'Hello World';
  }

  
  shouldAddStamp(post,index){
    
         if(this.posts.length >=2 && index!= 0 )
          return !this.sameDay(post.created, this.posts[index-1].created );
         else 
          return true;
    
        
    
      }

      private  sameDay(date1, date2) {
        
           let d1 = new Date(date1);
           let d2 = new Date(date2);
        
            return d1.getFullYear() === d2.getFullYear() &&
              d1.getMonth() === d2.getMonth() &&
              d1.getDate() === d2.getDate();
          }
        

}
