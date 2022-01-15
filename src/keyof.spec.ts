import { expectType } from 'ts-expect';
import { keyof } from './keyof';

const keyofName = keyof({ keyof });

describe(`${keyofName}: use cases`, () => {
  const one = 1;
  const two = 2;

  it.concurrent('positive', () => {
    expect(keyof({ one })).toBe('one');
  });

  it.concurrent('negative', () => {
    const result = keyof({ one, two });
    expect(result).toBe(undefined);
    expectType<unknown>(result);
  });
});
