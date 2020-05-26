import { FleetAssignment } from "./FleetAssignment";
declare class HorizontalAssignment extends FleetAssignment {
    rowsUsed: Set<number>;
    constructor();
    protected resetCache(): void;
    getBlocks(l: number): string[];
}
export { HorizontalAssignment };
