/**
 * Return the total count factory from Factories array
 * @param {*} escrowFactories Array of escrow Factories
 * @returns the total count of factory
 */
export const countEscrowFactory = escrowFactories => {
  if (!escrowFactories) {
    return 0;
  }

  return escrowFactories.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.count),
    0
  );
};
