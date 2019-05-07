import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class GocodeeLibDemoService {

  message = new BehaviorSubject('');
  visible = new BehaviorSubject(false);

  constructor(@Inject('config') private config) { }

  //Pass two variables here to start the operator
  sumValue(val1: number, val2: number) {
    let sum = 0;
    sum = val1 + val2;
    this.message.next(`User name is ${this.config.brand} \n ${sum} with values input1: ${val1} and input2: ${val2}`);
  }

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }

  // Pass the array and viewer to show up the result
  each(array, delegate) {
    return _.each(array, delegate);
  }

}
