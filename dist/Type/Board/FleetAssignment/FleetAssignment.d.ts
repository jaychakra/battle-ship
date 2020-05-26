import { IFleetAssignmentStrategy } from "./IFleetAssignmentStrategy";
import { Ship } from "../../SeaEntity/Ship";
declare abstract class FleetAssignment implements IFleetAssignmentStrategy {
    abstract getBlocks(l: number): string[];
    protected resetCache(): void;
    execute(): Ship[];
}
export { FleetAssignment };
