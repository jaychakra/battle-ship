import { MapDataStore } from "./Repo";
declare class PlayerDataStore extends MapDataStore {
    private static instance;
    private constructor();
    static getInstance(): PlayerDataStore;
}
export { PlayerDataStore };
