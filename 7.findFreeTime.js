function findFreeTime(bookedIntervals, workingHours) {
  const [workStart, workEnd] = workingHours;
  const clippedIntervals = [];

  // 1. Working hours er baire thaka intervals bad dibo ebong bounds er moddhe clip korbo
  for (const [start, end] of bookedIntervals) {
    const validStart = Math.max(workStart, start);
    const validEnd = Math.min(workEnd, end);

    if (validStart < validEnd) {
      clippedIntervals.push([validStart, validEnd]);
    }
  }

  // 2. Start time onujayi intervals sort korbo
  clippedIntervals.sort((a, b) => a[0] - b[0]);

  // 3. Overlapping booked intervals gulo ke merge kore consolidated list banabo
  const mergedBooked = [];
  for (const interval of clippedIntervals) {
    if (
      mergedBooked.length === 0 ||
      mergedBooked[mergedBooked.length - 1][1] < interval[0]
    ) {
      mergedBooked.push(interval);
    } else {
      mergedBooked[mergedBooked.length - 1][1] = Math.max(
        mergedBooked[mergedBooked.length - 1][1],
        interval[1],
      );
    }
  }

  // 4. Booked intervals er majhkhaner free time gap gulo track korbo
  const freeIntervals = [];
  let currentPointer = workStart;

  for (const [start, end] of mergedBooked) {
    if (currentPointer < start) {
      freeIntervals.push([currentPointer, start]);
    }
    currentPointer = Math.max(currentPointer, end);
  }

  // Shesh booking er por workEnd porjonto free time thakle setao push korlam
  if (currentPointer < workEnd) {
    freeIntervals.push([currentPointer, workEnd]);
  }

  return freeIntervals;
}
