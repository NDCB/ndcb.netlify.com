import { sequence } from "@ndcb/util";

export default [
  {
    input: [],
    predicate: (n: number): boolean => n % 2 == 0,
    expected: true,
    description: 'returns "true" if the iterable is empty',
  },
  {
    input: [1, 2, 3, 4],
    predicate: (n: number): boolean => n % 2 == 0,
    expected: false,
    description:
      'returns "false" if the predicate returns "false" for some element',
  },
  {
    input: [2, 4],
    predicate: (n: number): boolean => n % 2 == 0,
    expected: true,
    description:
      'returns "true" if the predicate returns "true" for every element',
  },
] as sequence.Sequence<{
  input: sequence.Sequence<unknown>;
  predicate: (element: unknown) => boolean;
  expected: boolean;
  description: string;
}>;
