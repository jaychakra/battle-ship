import { Ship } from "../../SeaEntity/Ship";
interface FleetAssignmentStrategy {
    execute(): Ship[];
}
export { FleetAssignmentStrategy };
