import { Impact } from "../Enum";
declare class Strike {
    readonly destination: String[];
    private result;
    constructor(blocks: String[]);
    addImpact(i: Impact): void;
    hasImpact(i: Impact): boolean;
}
export { Strike };
