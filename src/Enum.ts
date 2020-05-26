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

enum SeaEntityIdentifier {
  WATER,
  DESTROYER,
  CARRIER,
  BATTLESHIP,
  CRUISER,
  SUBMARINE,
}

export {GameMode, GameStateIdentifier, SeaEntityStatus, PlayerIdentifier, ShipTypes, Impact, SeaEntityIdentifier}
