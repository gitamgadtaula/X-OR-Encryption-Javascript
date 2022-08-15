const getAsciiSum = require(`./app`);

test(`expects the sum of the ASCII values in the original text to be 129,448`, () => {
    expect(getAsciiSum()).toBe(129448);
});
test(`don't expects the sum of the ASCII values in the original text to be 100`, () => {
    expect(getAsciiSum()).not.toBe(100);
});

