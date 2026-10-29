function selectBestDiscount(price, offers) {
  let bestOffer = null;
  let lowestPrice = price; // Prothome lowest price hishebe original price dhorlam

  for (const offer of offers) {
    // 1. Min price condition fulfill na korle offer eligible na, tai skip korbo
    if (price < offer.minPrice) continue;

    // 2. Offer er type onujayi discount calculate korbo
    let discountedPrice;
    if (offer.type === "flat") {
      discountedPrice = price - offer.value;
    } else if (offer.type === "percent") {
      discountedPrice = price - price * (offer.value / 100);
    }

    // 3. Final price jate 0 er niche na jay tai clamp korlam
    const finalPrice = Math.max(0, discountedPrice);

    // 4. Strictly kom price pailei update korbo (tie hole prothom ta preserve thakbe)
    if (finalPrice < lowestPrice) {
      lowestPrice = finalPrice;
      bestOffer = offer;
    }
  }

  // Original price er cheye kom kono valid offer na thakle bestOffer null-i return hobe
  return bestOffer;
}
