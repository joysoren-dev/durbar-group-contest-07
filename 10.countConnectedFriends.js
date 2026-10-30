function countConnectedFriends(friendships, startPerson) {
  // 1. Friendships theke undirected graph (adjacency list) toiri korlam
  const graph = {};

  for (const [p1, p2] of friendships) {
    if (!graph[p1]) graph[p1] = [];
    if (!graph[p2]) graph[p2] = [];

    graph[p1].push(p2);
    graph[p2].push(p1);
  }

  // 2. Visited track korar jonno Set ebong traverse korar jonno Queue nilam
  const visited = new Set();
  const queue = [startPerson];
  visited.add(startPerson);

  // 3. BFS traversal chaliye connected shobai ke visit korlam
  while (queue.length > 0) {
    const current = queue.shift();
    const neighbors = graph[current] || [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  // Network-e shorbomot kotojon connected ache (visited er size) return korlam
  return visited.size;
}
