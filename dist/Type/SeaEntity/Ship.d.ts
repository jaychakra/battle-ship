import { Impact, SeaEntityIdentifier, SeaEntityStatus } from "../../Enum";
import { ISeaEntity } from "./ISeaEntity";
import { Board } from "../Board/Board";
declare abstract class Ship implements ISeaEntity {
    protected status: SeaEntityStatus;
    protected blocks: String[];
    protected id: SeaEntityIdentifier;
    protected constructor(blocks: String[]);
    getBlocks(): String[];
    getSeaEntityStatus(): SeaEntityStatus;
    assessStrikeImpact(board: Board): Impact;
    getSeaEntityIdentifier(): SeaEntityIdentifier;
    getActiveColor(): string;
    getDestroyedColor(): string;
}
export { Ship };
