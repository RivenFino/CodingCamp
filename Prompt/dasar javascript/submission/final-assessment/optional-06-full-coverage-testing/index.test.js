import sum from './index.js';
import { strict as assert } from 'node:assert';

assert.equal(sum(1, 2), 3, '1 + 2 should equal 3');
assert.equal(sum(-1, 2), 0, '-1 + 2 should equal 0');
assert.equal(sum(1, '2'), 0, '1 + "2" should equal 0');
assert.equal(sum(1, -2), 0, '1 + -2 should equal 0');
assert.equal(sum(0, 0), 0, '0 + 0 should equal 0');

console.log('All tests passed!');