import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/addCharacter/character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations : [
    MainPageComponent,
    ListComponent,
    CharacterComponent

  ],
  exports : [
    MainPageComponent,
  ],
  imports : [
    CommonModule,
    FormsModule
  ]
})

export class DbzModule{
}
