// 739 question on Leetcode

var dailyTemperatures = function (temperatures) {
    // Store the final answer
    const answer = new Array(temperatures.length).fill(0);

    // Stack will store indexes of days
    const stack = [];

    // Traverse all temperatures
    for (let i = 0; i < temperatures.length; i++) {

        // If current temperature is warmer than the
        // temperature at the top index of the stack,
        // then we found the next warmer day.
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            // Get the previous day's index
            const previousDay = stack.pop();

            // Calculate how many days we had to wait
            answer[previousDay] = i - previousDay;
        }

        // Store the current day's index
        stack.push(i);
    }

    // Return the final answer
    return answer;
};