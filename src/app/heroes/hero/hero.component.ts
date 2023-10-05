import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre:string="IronMan";

  public edad:number=45;

  get capitalizedName() : string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero():void{
    this.nombre="Spiderman"
  }

  changeAge():void{
    this.edad=25
  }

  resetForm():void{
    this.nombre="IronMan";

    this.edad=45;

    
  }

}
