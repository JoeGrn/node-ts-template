import { add } from './index';

const validInputs = [
    { input1: 1, input2: 1, expected: 2 },
    { input1: 0, input2: 2, expected: 2 },
    { input1: 10, input2: 10, expected: 20 },
    { input1: 999, input2: 999, expected: 1998 },
]

describe.each(validInputs)('when add is given two valid numeric inputs', ({ input1, input2, expected }) => {
    it('should return the addition of the two inputs', () => {
        expect(add(input1, input2)).toEqual(expected);
    });
})
