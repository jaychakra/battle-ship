import { IFleetAssignmentStrategy } from "./IFleetAssignmentStrategy";
import { Ship } from "../../SeaEntity/Ship";
declare class Ran implements IFleetAssignmentStrategy {
    private static getBlocks;
    execute(): Ship[];
}
export { Ran };
