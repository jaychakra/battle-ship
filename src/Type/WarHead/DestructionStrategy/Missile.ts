import {IDestructionStrategy} from "./IDestructionStrategy";

class Missile implements IDestructionStrategy {
  generateDestinationFromTarget(target: string[]): string[] {
    return [target[0]];
  }
}

export {Missile}
