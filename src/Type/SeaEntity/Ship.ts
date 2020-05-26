import {Impact, SeaEntityIdentifier, SeaEntityStatus, SurfaceType} from "../../Enum";
import {ISeaEntity} from "./ISeaEntity";
import {Board} from "../Board/Board";

class Ship implements ISeaEntity{
  protected status: SeaEntityStatus;
  protected surfaceType: SurfaceType;
  protected blocks: String[];
  protected id: SeaEntityIdentifier;

  constructor(blocks: String[]) {
    this.status = SeaEntityStatus.CLEAN;
    this.surfaceType = SurfaceType.SHIP;
    this.blocks = blocks;
  }

  public getBlocks(): String[] {
    return this.blocks;
  }

  getSeaEntityStatus(): SeaEntityStatus {
    return this.status;
  }

  assessStrikeImpact(board: Board): Impact {
    let response: Impact = Impact.SHIP_WEAKENED;

    let blocksDestroyed = 0;
    for (let block of  this.blocks) {
        blocksDestroyed += board.getHealth(block) == 0 ? 1 : 0;
    }

    if(blocksDestroyed ==  this.blocks.length) {
      this.status=SeaEntityStatus.DESTROYED;
      response = Impact.SHIP_DESTROYED;
    }
    return response;
  }

  getSeaEntityIdentifier(): SeaEntityIdentifier {
    return this.id;
  }


}

export {Ship}
