import { Surface } from "./Surface";
import { Ship } from "../SeaEntity/Ship";
import { Strike } from "../WarHead/Strike";
import { IFleetAssignmentStrategy } from "./FleetAssignment/IFleetAssignmentStrategy";
declare class Board {
    private coordinates;
    fleet: Ship[];
    constructor(fleetAssignmentStrategy: IFleetAssignmentStrategy);
    static generateCoordinate: () => string[];
    private assessImpact;
    getHealth(block: String): number;
    getSurface(block: String): Surface;
    changeSurfaceState(s: Strike): void;
}
export { Board };
