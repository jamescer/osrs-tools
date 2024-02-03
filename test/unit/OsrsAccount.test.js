const { OsrsAccount } = require('../../model/runescape/OsrsAccount.js');
// var assert = require('assert');
// var expect = require("chai").expect;
var testAccount = {};

var newOsAcc = new OsrsAccount(testAccount);

console.log(newOsAcc);
console.log(newOsAcc.getSkill('attack'));

test('Account name should be "not poop"', () => {
  expect(newOsAcc.getName()).toBe('not poop');
});
