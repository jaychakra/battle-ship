import {IDestructionStrategy} from "./IDestructionStrategy";

class DoorGun implements IDestructionStrategy {
  generateDestinationFromTarget(target: string[]): string[] {
    return target;
  }
}

export {DoorGun}
