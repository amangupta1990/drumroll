import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the StripTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'stripTime',
})
export class StripTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.substr(0, value.indexOf('at')); 
  }
}
