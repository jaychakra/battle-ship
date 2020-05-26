import {Ship} from "./Ship";
import {SeaEntityIdentifier} from "../../Enum";

class Cruiser extends Ship {
  constructor(blocks: String[]) {
    super(blocks);
    this.id = SeaEntityIdentifier.CRUISER;
  }
}

export {Cruiser}
