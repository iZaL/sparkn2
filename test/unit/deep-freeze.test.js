import test from 'tape';
import deepFreeze from '../utils/deep-freeze';

test.skip('deepFreeze makes an object immutable', (t) => {

  t.plan(1);

  const before = {
    name: 'Harry Potter',
    house: 'Gryffindor'
  };
  const frozen = deepFreeze(before);

  try {
    frozen.wandCore = 'Phoenix feather';
  } catch (error) {
    const expected = new TypeError("Can't add property wandCore, object is not extensible");
    t.deepEqual(error, expected, 'Frozen object remains unchanged');
  }
});
