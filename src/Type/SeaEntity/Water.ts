import {ISeaEntity} from "./ISeaEntity";
import {Impact, SeaEntityStatus, SurfaceType} from "../../Enum";
import {Board} from "../Board/Board";

class Water implements ISeaEntity{
  status: SeaEntityStatus;
  surfaceType: SurfaceType;
  constructor() {
    this.surfaceType = SurfaceType.WATER;
  }

  getSeaEntityStatus(): SeaEntityStatus {
    return this.status;
  }

  assessStrikeImpact(board: Board): Impact {
    this.status = SeaEntityStatus.DESTROYED;
    return Impact.WATER_SPLASHED;
  }

}
export {Water}
