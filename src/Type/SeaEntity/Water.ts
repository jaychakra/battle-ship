import {ISeaEntity} from "./ISeaEntity";
import {Impact, SeaEntityIdentifier, SeaEntityStatus, SurfaceType} from "../../Enum";
import {Board} from "../Board/Board";

class Water implements ISeaEntity{
  protected status: SeaEntityStatus;
  protected surfaceType: SurfaceType;
  protected id: SeaEntityIdentifier;
  constructor() {
    this.surfaceType = SurfaceType.WATER;
    this.id = SeaEntityIdentifier.WATER;
  }

  getSeaEntityStatus(): SeaEntityStatus {
    return this.status;
  }

  assessStrikeImpact(board: Board): Impact {
    this.status = SeaEntityStatus.DESTROYED;
    return Impact.WATER_SPLASHED;
  }

  getSeaEntityIdentifier(): SeaEntityIdentifier {
    return this.id;
  }

}
export {Water}
