import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 47;

  get getHeroCapitalizatedName(): string {
    return this.name.toUpperCase();
  }

  GetHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  ChangeHero(): void {
    this.name = 'spiderman'
  }

  ChangeAge(): void {
    this.age = 25;
  }
}














