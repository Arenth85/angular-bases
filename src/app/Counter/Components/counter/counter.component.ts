import { Component } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './Counter.component.html',
})



export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) : void{
  this.counter += value;
  }
    resetCounter(){
      this.counter = 10;

    }


}
