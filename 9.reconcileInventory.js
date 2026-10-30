function reconcileInventory(initialInventory, transactions) {
  // 1. Original inventory mutate na kore ekta copy baniye nilam
  const inventory = { ...initialInventory };

  // 2. Protita transaction loop kore process korbo
  for (const transaction of transactions) {
    const { productId, type, quantity } = transaction;

    // Product jodi inventory-te age theke na thake, tobe 0 diye shuru korbo
    if (inventory[productId] === undefined) {
      inventory[productId] = 0;
    }

    // 'in' hole stock jog korbo
    if (type === "in") {
      inventory[productId] += quantity;
    }
    // 'out' hole stock biyog korbo, kintu 0 er niche nambte dibo na
    else if (type === "out") {
      inventory[productId] = Math.max(0, inventory[productId] - quantity);
    }
  }

  // 3. Updated final inventory object return korlam
  return inventory;
}
