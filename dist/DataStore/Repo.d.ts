interface IRepo {
    get(key: String): any;
    has(key: String): boolean;
    add(key: String, value: any): boolean;
    update(key: String, value: any): boolean;
}
declare class MapDataStore implements IRepo {
    store: Map<String, any>;
    get(key: String): any;
    has(key: String): boolean;
    add(key: String, value: any): boolean;
    update(key: String, value: any): boolean;
}
export { MapDataStore };
