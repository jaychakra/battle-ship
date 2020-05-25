import {MapDataStore} from "./Repo";
import {Player} from "../Type/Player";

class PlayerDataStore extends MapDataStore {
  private static instance: PlayerDataStore = new PlayerDataStore();
  private constructor() {
    super();
    this.store = new Map<String, Player>()
  }

  static getInstance(): PlayerDataStore {
    return PlayerDataStore.instance;
  }
}

export {PlayerDataStore}
