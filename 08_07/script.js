/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, symbol, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if(prefix) {
    console.log(`
      Sum before tip: ${symbol} ${sum}
      Tip percentage: ${percentage} %
      Tip:            ${symbol} ${tip.toFixed(2)}
      Total:          ${symbol} ${total.toFixed(2)}
    `);
  } else {
    console.log(`
      Sum before tip: ${sum} ${symbol}
      Tip percentage: ${percentage} %
      Tip:            ${tip.toFixed(2)} ${symbol}
      Total:          ${total.toFixed(2)} ${symbol}
    `);
  }
};

tipCalculator(29.95, 28, "£", true);
