import {Impact} from "../../Enum";
import {IDestructionStrategy} from "./DestructionStrategy/IDestructionStrategy";

class Strike {
  readonly destination: string [];
  private result: Set<Impact>;
  private readonly target: string[]

  constructor(blocks: String [], destructionStrategy: IDestructionStrategy) {
    // @ts-ignore
    this.target = blocks;
    this.destination = destructionStrategy.generateDestinationFromTarget(this.target);
    this.result = new Set<Impact>();
  }

  public addImpact(i: Impact): void {
    this.result.add(i);
  }

  public hasImpact(i: Impact): boolean {
    return this.result.has(i);
  }
}

export {Strike}
