import { MonsterType } from '../utils/monster.utils';

export class Monster {
  name: string = 'Monster';
  image: string = 'assets/img/pik.png';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 10;
  figureCaption: string = 'N°000 Monster';

  attackName: string = 'Standard Attack';
  attackStrength: number = 10;
  attackDescription: string = 'A standard attack';
}
