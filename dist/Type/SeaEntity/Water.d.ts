import { ISeaEntity } from "./ISeaEntity";
import { Impact, SeaEntityIdentifier, SeaEntityStatus, SurfaceType } from "../../Enum";
import { Board } from "../Board/Board";
declare class Water implements ISeaEntity {
    protected status: SeaEntityStatus;
    protected surfaceType: SurfaceType;
    protected id: SeaEntityIdentifier;
    constructor();
    getSeaEntityStatus(): SeaEntityStatus;
    assessStrikeImpact(board: Board): Impact;
    getSeaEntityIdentifier(): SeaEntityIdentifier;
}
export { Water };
