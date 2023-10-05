import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=["Spiderman","Thor","Hulk","Ironman","Groot"];
  public heroRemoved?:string="";

  deleteHero():void{
    let heroe=this.heroNames.pop()
    this.heroRemoved =heroe ;
  }

}
