function updateNotificationCount(initialCount, events) {
  // 1. Current count track korar jonno mutable variable nilam
  let currentCount = initialCount;

  // 2. Events array er protita event sequentially loop kore process korbo
  for (const event of events) {
    // Jodi count na thake taile default 1 dhorbo
    const amount = event.count !== undefined ? event.count : 1;

    if (event.type === "ADD") {
      // ADD hole amount jog hobe
      currentCount += amount;
    } else if (event.type === "READ") {
      // READ hole minus hobe, kintu count jate negative na hoy tai 0 diye clamp korlam
      currentCount = Math.max(0, currentCount - amount);
    } else if (event.type === "CLEAR") {
      // CLEAR hole direct reset hoye 0 hoye jabe
      currentCount = 0;
    }
  }

  // 3. Sob event seshe final notification count return korlam
  return currentCount;
}
