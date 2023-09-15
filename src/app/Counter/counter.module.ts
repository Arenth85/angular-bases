import { NgModel } from "@angular/forms";
import { CounterComponent } from './Components/counter/counter.component';
import { NgModule } from "@angular/core";

@NgModule({
declarations:[
  CounterComponent
],
 exports: [
  CounterComponent
 ]

})

 export class CounterModule{}
