import { Impact } from "../../Enum";
import { IDestructionStrategy } from "./DestructionStrategy/IDestructionStrategy";
declare class Strike {
    readonly destination: string[];
    private result;
    private readonly target;
    constructor(blocks: String[], destructionStrategy: IDestructionStrategy);
    addImpact(i: Impact): void;
    hasImpact(i: Impact): boolean;
}
export { Strike };
