interface IRepo {
  get(key: String): any;

  has(key: String): boolean;

  add(key: String, value: any): boolean;

  update(key: String, value: any): boolean;
}

class MapDataStore implements IRepo {
  store: Map<String, any>;

  public get(key: String): any {
    if (!this.has(key)) throw new Error(`Key ${key} not present in store`);
    return this.store.get(key);
  }

  public has(key: String): boolean {
    return this.store.has(key);
  }

  public add(key: String, value: any): boolean {
    if (this.has(key)) throw new Error(`Key ${key} already present in store`);
    this.store.set(key, value);
    return this.store.has(key);
  }

  public update(key: String, value: any): boolean {
    throw new Error("Not Implemented");
  }

}

export {MapDataStore}
