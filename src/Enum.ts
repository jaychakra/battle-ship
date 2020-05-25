enum GameMode {
  COMPUTER,
  TWO_PLAYER
}

enum ShipOrientation {
  HORIZONTAL,
  VERTICAL,
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




export {GameMode, ShipOrientation, SeaEntityStatus, PlayerIdentifier, SurfaceType, ShipTypes, Impact}
