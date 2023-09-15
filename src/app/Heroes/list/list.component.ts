import { Component } from '@angular/core';

@Component({
  selector: 'app-Heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames : string []= ['Gilberto','David', 'Daniel','Alejandro', 'Yonic', 'Ernesto', 'Mario', 'Harald'];
  public deleteHero ?: string;

  removeLastHero(): void{
    this.deleteHero = this.heroNames.pop();
    //console.log({deleteHero});
  }
}
