import {Ship} from "./Ship";
import {SeaEntityIdentifier} from "../../Enum";

class Battleship extends Ship {
  constructor(blocks: String[]) {
    super(blocks);
    this.id = SeaEntityIdentifier.BATTLESHIP;
  }
}

export {Battleship}
