import { HorizontalAssignment } from "./Type/Board/FleetAssignment/HorizontalAssignment";
import { GameMode, SeaEntityIdentifier } from "./Enum";
import { DoorGun } from "./Type/WarHead/DestructionStrategy/DoorGun";
declare const Configuration: {
    boardSize: number;
    fleetAssignmentStrategy: HorizontalAssignment;
    destructionStrategy: DoorGun;
    gameController: GameMode;
    shipsLength: {
        3: number;
        4: number;
        5: number;
        2: number;
        1: number;
    };
    seaEntityColors: {
        4: string;
        3: string;
        5: string;
        0: string;
        2: string;
        1: string;
    };
    damageColors: {
        CLEAN: string;
        DESTROYED_WATER: string;
        DESTROYED_SHIP: string;
    };
    boardHeader: {
        fgColor: string;
        bgColor: string;
    };
};
export { Configuration };
