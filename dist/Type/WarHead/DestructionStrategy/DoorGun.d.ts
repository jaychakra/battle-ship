import { IDestructionStrategy } from "./IDestructionStrategy";
declare class DoorGun implements IDestructionStrategy {
    generateDestinationFromTarget(target: string[]): string[];
}
export { DoorGun };
