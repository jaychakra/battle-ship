import { Impact, SeaEntityIdentifier, SeaEntityStatus } from "../../Enum";
import { Board } from "../Board/Board";
interface ISeaEntity {
    getSeaEntityStatus(): SeaEntityStatus;
    assessStrikeImpact(board: Board): Impact;
    getSeaEntityIdentifier(): SeaEntityIdentifier;
    getActiveColor(): string;
    getDestroyedColor(): string;
}
export { ISeaEntity };
