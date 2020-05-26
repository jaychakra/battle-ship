import {Ship} from "./Ship";
import {SeaEntityIdentifier} from "../../Enum";

class Destroyer extends Ship {
  constructor(blocks: String[]) {
    super(blocks);
    this.id=SeaEntityIdentifier.DESTROYER;
  }
}

export {Destroyer}
