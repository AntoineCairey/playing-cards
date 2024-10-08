import { CommonModule } from '@angular/common';
import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monsters!: Monster[];
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter((monster) =>
      monster.name.includes(this.search())
    );
  });

  constructor() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = 'Pik';
    monster1.hp = 40;
    monster1.figureCaption = 'N°001 Pik';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = 'Car';
    monster2.image = 'assets/img/car.png';
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = 'N°002 Car';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = 'Bulb';
    monster3.image = 'assets/img/bulb.png';
    monster3.type = MonsterType.PLANT;
    monster3.hp = 60;
    monster3.figureCaption = 'N°003 Bulb';
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = 'Sala';
    monster4.image = 'assets/img/sala.png';
    monster4.type = MonsterType.FIRE;
    monster4.hp = 60;
    monster4.figureCaption = 'N°004 Sala';
    this.monsters.push(monster4);

    console.log(this.monsters);
  }
}
