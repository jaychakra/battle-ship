import { Impact, SeaEntityIdentifier, SeaEntityStatus } from "../../Enum";
import { ISeaEntity } from "./ISeaEntity";
import { Board } from "../Board/Board";
declare class Ship implements ISeaEntity {
    protected status: SeaEntityStatus;
    protected blocks: String[];
    protected id: SeaEntityIdentifier;
    constructor(blocks: String[]);
    getBlocks(): String[];
    getSeaEntityStatus(): SeaEntityStatus;
    assessStrikeImpact(board: Board): Impact;
    getSeaEntityIdentifier(): SeaEntityIdentifier;
}
export { Ship };
