function trackElevator(startFloor, minFloor, maxFloor, commands) {
  // Current floor track korar jonno variable nilam
  let currentFloor = startFloor;

  for (const command of commands) {
    // UP hole floor 1 barabo, kintu maxFloor cross korte dibo na
    if (command === "UP") {
      if (currentFloor < maxFloor) {
        currentFloor += 1;
      }
    }
    // DOWN hole floor 1 komabo, kintu minFloor er niche nambte dibo na
    else if (command === "DOWN") {
      if (currentFloor > minFloor) {
        currentFloor -= 1;
      }
    }
  }

  // Shob commands process howar por final floor position return korlam
  return currentFloor;
}
