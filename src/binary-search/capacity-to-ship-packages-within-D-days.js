// 1011 question no leetcode

var shipWithinDays = function(weights, days) {
    // Minimum capacity must be the heaviest package
    let left = Math.max(...weights);

    // Maximum capacity can be sum of all packages
    let right = weights.reduce((sum, weight) => sum + weight, 0);

    // Check if a capacity can ship all packages within given days
    function canShip(capacity) {
        let daysNeeded = 1;
        let currentWeight = 0;

        for (let weight of weights) {
            // Start a new day if capacity exceeds
            if (currentWeight + weight > capacity) {
                daysNeeded++;
                currentWeight = 0;
            }

            currentWeight += weight;
        }

        return daysNeeded <= days;
    }

    // Binary Search for minimum valid capacity
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (canShip(mid)) {
            // Try smaller capacity
            right = mid;
        } else {
            // Need bigger capacity
            left = mid + 1;
        }
    }

    return left;
};