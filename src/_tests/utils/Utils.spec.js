import { countEscrowFactory } from '../../utils';

test('countEscrowFactory should return 13', () => {
  const escrowFactories = [
    { count: 1 },
    { count: 9 },
    { count: 0 },
    { count: 3 },
  ];
  expect(countEscrowFactory(escrowFactories)).toEqual(13);
});

test('countEscrowFactory should return 5', () => {
  const escrowFactories = [
    { count: 2 },
    { count: 3 },
    { count: 0 },
    { count: 0 },
  ];
  expect(countEscrowFactory(escrowFactories)).toEqual(5);
});

test('countEscrowFactory should return 0', () => {
  const escrowFactories = undefined;
  expect(countEscrowFactory(escrowFactories)).toEqual(0);
});
