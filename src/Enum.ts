enum GameMode {
  COMPUTER,
  TWO_PLAYER
}

enum SeaEntityStatus {
  CLEAN,
  DIRTY,
  DESTROYED
}

enum PlayerIdentifier {
  FIRST,
  SECOND
}

enum SurfaceType {
  WATER,
  SHIP
}

enum ShipTypes {
  DESTROYER,
  CARRIER,
  SUBMARINE,
  CRUISER,
  BATTLESHIP
}

enum Impact {
  WATER_SPLASHED,
  SHIP_WEAKENED,
  SHIP_DESTROYED,
  OPPONENT_DESTROYED
}

enum GameStateIdentifier {
  INITIALIZING,
  RUNNING,
  COMPLETED
}


export {GameMode, GameStateIdentifier, SeaEntityStatus, PlayerIdentifier, SurfaceType, ShipTypes, Impact}
