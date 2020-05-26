import {Ship} from "../../SeaEntity/Ship";

interface IFleetAssignmentStrategy {
  execute(): Ship[];
}

export {IFleetAssignmentStrategy}
