import { ISeaEntity } from "./ISeaEntity";
import { Impact, SeaEntityIdentifier, SeaEntityStatus } from "../../Enum";
import { Board } from "../Board/Board";
declare class Water implements ISeaEntity {
    protected status: SeaEntityStatus;
    protected id: SeaEntityIdentifier;
    constructor();
    getSeaEntityStatus(): SeaEntityStatus;
    assessStrikeImpact(board: Board): Impact;
    getSeaEntityIdentifier(): SeaEntityIdentifier;
    getActiveColor(): string;
    getDestroyedColor(): string;
}
export { Water };
