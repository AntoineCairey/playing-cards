import { IMonster } from '../interfaces/monster.interface';
import { MonsterType } from '../utils/monster.utils';

export class Monster implements IMonster {
  id: number = -1;
  name: string = 'Monster';
  image: string = 'assets/img/pik.png';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 10;
  figureCaption: string = 'N°000 Monster';

  attackName: string = 'Standard Attack';
  attackStrength: number = 10;
  attackDescription: string = 'A standard attack';

  copy(): Monster {
    return Object.assign(new Monster(), this);
  }

  static fromJson(monsterJson: IMonster): Monster {
    return Object.assign(new Monster(), monsterJson);
  }

  toJson(): IMonster {
    const monsterJson: IMonster = Object.assign({}, this);
    delete monsterJson.id;
    return monsterJson;
  }
}
