import {IDestructionStrategy} from "./IDestructionStrategy";

class NuclearBomb implements IDestructionStrategy {
  generateDestinationFromTarget(target: string[]): string[] {
    throw new Error("Not Implemented")
  }
}

export {NuclearBomb}
