import {FleetAssignment} from "./FleetAssignment";
import {Configuration} from "../../../configuration";

class HorizontalAssignment extends FleetAssignment{
  rowsUsed: Set<number>;

  constructor() {
    super();
    this.rowsUsed = new Set();
  }

  protected resetCache() {
    this.rowsUsed = new Set();
  }

  getBlocks(l: number): string[] {
    let row = Math.floor(Math.random() * Configuration.boardSize);
    while(this.rowsUsed.has(row)) {
      row = Math.floor(Math.random() * Configuration.boardSize);
    }
    this.rowsUsed.add(row);

    const response: string[] = [];

    const startColumn = Math.floor(Math.random() * (Configuration.boardSize - l));

    for (let i = startColumn; i < startColumn + l; i++) {
      const rowId = String.fromCharCode(65 + row);
      response.push(`${rowId}${i}`);
    }
    return response;
  }
}

export {HorizontalAssignment}
