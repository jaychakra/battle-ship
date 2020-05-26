declare enum GameMode {
    COMPUTER = 0,
    TWO_PLAYER = 1
}
declare enum SeaEntityStatus {
    CLEAN = 0,
    DESTROYED = 1
}
declare enum PlayerIdentifier {
    FIRST = 0,
    SECOND = 1
}
declare enum Impact {
    WATER_SPLASHED = 0,
    SHIP_WEAKENED = 1,
    SHIP_DESTROYED = 2,
    OPPONENT_DESTROYED = 3
}
declare enum GameStateIdentifier {
    INITIALIZING = 0,
    RUNNING = 1,
    COMPLETED = 2
}
declare enum SeaEntityIdentifier {
    WATER = 0,
    DESTROYER = 1,
    CARRIER = 2,
    BATTLESHIP = 3,
    CRUISER = 4,
    SUBMARINE = 5
}
export { GameMode, GameStateIdentifier, SeaEntityStatus, PlayerIdentifier, Impact, SeaEntityIdentifier };
