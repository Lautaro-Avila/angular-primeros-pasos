import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Goku', 'Broly', 'Gohan']

  public heroDelete?: string;

  RemoveLastHero(): void {
    this.heroDelete = this.heroName.pop();
  }

}
