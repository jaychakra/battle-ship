import { IDestructionStrategy } from "./IDestructionStrategy";
declare class NuclearBomb implements IDestructionStrategy {
    generateDestinationFromTarget(target: string[]): string[];
}
export { NuclearBomb };
