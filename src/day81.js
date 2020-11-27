const dec2bin = dec => (dec >>> 0).toString(2);

const getNumberOfDigits = (value) => {
  let count = 0;

  if (value > 1) count++;
  while(value / 10 >= 1) {
    value /= 10;
    count++;
  }

  return count;
};

const flipDigits = (value) => {
  // const digits = getNumberOfDigits(value);
  // const complement = Math.pow(2, digits) - 1;

  // // invert the bits of the value
  // const r = ~value;

  // const complementDigits = dec2bin(complement);
  // const result = (Math.pow(2, 32) - 1) & (Math.pow(2, digits) - 1);
  // const resultDigits = dec2bin(result);

  // console.log({ result, resultDigits });

  // // return r * complement;
  // return ~value & (Math.pow(2, digits) - 1)
  let len = value.toString(2).length;
  let mask = Math.pow(2, len) - 1;
  return value ^ mask;
};

module.exports = flipDigits;
