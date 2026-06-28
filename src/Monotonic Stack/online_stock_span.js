// 901 question on Leetcode

var StockSpanner = function() {
    // Stack will store [price, span]
    this.stack = [];
};

StockSpanner.prototype.next = function(price) {
    let span = 1;

    // Merge all previous prices
    // that are less than or equal to current price
    while (
        this.stack.length > 0 &&
        this.stack[this.stack.length - 1][0] <= price
    ) {
        span += this.stack.pop()[1];
    }

    // Store current price and its span
    this.stack.push([price, span]);

    return span;
};