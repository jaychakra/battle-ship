import { Surface } from "./Surface";
import { Ship } from "../SeaEntity/Ship";
import { Strike } from "../WarHead/Strike";
declare class Board {
    private coordinates;
    fleet: Ship[];
    constructor();
    private static generateCoordinate;
    getHealth(block: String): number;
    private assessImpact;
    changeSurfaceState(s: Strike): void;
    getSurface(block: String): Surface;
}
export { Board };
