import { ISeaEntity } from "../SeaEntity/ISeaEntity";
declare class Surface {
    readonly entity: ISeaEntity;
    private health;
    constructor(entity: ISeaEntity);
    setHealthTo(health: number): void;
    getHealth(): number;
}
export { Surface };
