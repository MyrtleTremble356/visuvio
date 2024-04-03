const getCurrentTimestamp = require('./getCurrentTimestamp')
const truncateString = require('./truncateString')
const arrayAverage = require('./arrayAverage')
const getMaxValue = require('./getMaxValue')
const isOddNumber = require('./isOddNumber')

module.exports = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }