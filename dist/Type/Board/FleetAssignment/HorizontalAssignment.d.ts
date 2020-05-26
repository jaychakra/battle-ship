import { FleetAssignmentStrategy } from "./FleetAssignmentStrategy";
import { Ship } from "../../SeaEntity/Ship";
declare class HorizontalAssignment implements FleetAssignmentStrategy {
    private static getBlocks;
    execute(): Ship[];
}
export { HorizontalAssignment };
