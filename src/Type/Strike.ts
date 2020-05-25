import {Impact} from "../Enum";

class Strike {
  readonly destination: String [];
  private result: Set<Impact>;

  constructor(blocks: String []) {
    this.destination = blocks;
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
