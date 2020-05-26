import {ISeaEntity} from "../SeaEntity/ISeaEntity";

class Surface {
  readonly entity: ISeaEntity;
  private health: number;

  constructor(entity: ISeaEntity) {
    this.health = 100;
    this.entity = entity;
  }

  public setHealth(health: number): void {
    this.health = health;
  }

  public getHealth(): number {
    return this.health;
  }
}

export {Surface}
