import {Ship} from "./Ship";
import {SeaEntityIdentifier} from "../../Enum";

class Submarine extends Ship {
  constructor(blocks: String[]) {
    super(blocks);
    this.id = SeaEntityIdentifier.SUBMARINE;
  }
}

export {Submarine}
