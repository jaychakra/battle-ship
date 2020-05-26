import { HorizontalAssignment } from "./Type/Board/FleetAssignment/HorizontalAssignment";
import { SeaEntityIdentifier } from "./Enum";
declare const Configuration: {
    boardSize: number;
    fleetAssignmentStrategy: HorizontalAssignment;
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
        DESTROYED: string;
    };
    boardHeader: {
        fgColor: string;
        bgColor: string;
    };
};
export { Configuration };
