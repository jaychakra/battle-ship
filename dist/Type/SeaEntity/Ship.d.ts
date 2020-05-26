import { Impact, SeaEntityIdentifier, SeaEntityStatus, SurfaceType } from "../../Enum";
import { ISeaEntity } from "./ISeaEntity";
import { Board } from "../Board/Board";
declare class Ship implements ISeaEntity {
    protected status: SeaEntityStatus;
    protected surfaceType: SurfaceType;
    protected blocks: String[];
    protected id: SeaEntityIdentifier;
    constructor(blocks: String[]);
    getBlocks(): String[];
    getSeaEntityStatus(): SeaEntityStatus;
    assessStrikeImpact(board: Board): Impact;
    getSeaEntityIdentifier(): SeaEntityIdentifier;
}
export { Ship };
