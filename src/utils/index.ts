/**
 * Return the total count factory from Factories array
 * @param {*} escrowFactories Array of escrow Factories
 * @returns the total count of factory
 */
interface IEscrowFactory {
  [k: string]: string;
  count: string;
}

type IEscrowFactories = IEscrowFactory[];

export const countEscrowFactory = (escrowFactories: IEscrowFactories) => {
  if (!escrowFactories) {
    return 0;
  }

  return escrowFactories.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.count, 10),
    0
  );
};
