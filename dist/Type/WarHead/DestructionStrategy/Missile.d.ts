import { IDestructionStrategy } from "./IDestructionStrategy";
declare class Missile implements IDestructionStrategy {
    generateDestinationFromTarget(target: string[]): string[];
}
export { Missile };
