enum GameMode {
  COMPUTER,
  TWO_PLAYER
}

enum SeaEntityStatus {
  CLEAN,
  DESTROYED
}

enum PlayerIdentifier {
  FIRST,
  SECOND
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

export {GameMode, GameStateIdentifier, SeaEntityStatus, PlayerIdentifier, Impact, SeaEntityIdentifier}
