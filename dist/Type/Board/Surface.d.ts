import { ISeaEntity } from "../SeaEntity/ISeaEntity";
declare class Surface {
    readonly entity: ISeaEntity;
    private health;
    constructor(entity: ISeaEntity);
    setHealth(health: number): void;
    getHealth(): number;
}
export { Surface };
