import {Ship} from "./Ship";
import {SeaEntityIdentifier} from "../../Enum";

class Carrier extends Ship {
  constructor(blocks: String[]) {
    super(blocks);
    this.id=SeaEntityIdentifier.CARRIER;
  }
}

export {Carrier}
