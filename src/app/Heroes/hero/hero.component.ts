import { Component } from '@angular/core';

@Component({
  selector: 'app-Heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string ='Mario Harald';
  public age:  number = 43;

  //Los gets son métodos
  get capitalizedName(): string{
    return this.name.toUpperCase();
    //return 'Eres todo para Mario Harald';
  }
  getHeroDescription(): string{

    return `${this.name} - ${this.age}`;

  }
  changeHero():void{
    this.name ='Super Mario Harald';
  }
  changeAge():void{
     this.age = 44;

  }
  resetForm(): void{
    this.name="mario harald";
    this.age = 43;
  }

}
