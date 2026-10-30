function maxTasks(tasks) {
  if (!tasks || tasks.length === 0) return 0;

  // Task gulo ke shesh hobar shomoy (finish time) onujayi choto theke boro shajalam
  const sortedTasks = [...tasks].sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinishTime = -Infinity;

  // Shajano task gulo loop kore ekta ekta check korbo
  for (const [start, finish] of sortedTasks) {
    // Current task er start time jodi ager shesh kora task er shomoy er por ba shoman hoy
    if (start >= lastFinishTime) {
      count += 1;
      lastFinishTime = finish; // Shesh hobar shomoy update kore nilam
    }
  }

  // Shorbomot koto gulo task kora gelo seta return korlam
  return count;
}
