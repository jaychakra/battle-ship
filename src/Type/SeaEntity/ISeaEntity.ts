import {Impact, SeaEntityStatus} from "../../Enum";
import {Board} from "../Board/Board";

interface ISeaEntity {

  getSeaEntityStatus(): SeaEntityStatus

  assessStrikeImpact(board: Board): Impact
}

export {ISeaEntity}
