import { Surface } from "./Surface";
import { Ship } from "../SeaEntity/Ship";
import { Strike } from "../WarHead/Strike";
declare class Board {
    private coordinates;
    fleet: Ship[];
    constructor();
    static generateCoordinate: () => string[];
    private assessImpact;
    getHealth(block: String): number;
    getSurface(block: String): Surface;
    changeSurfaceState(s: Strike): void;
}
export { Board };
