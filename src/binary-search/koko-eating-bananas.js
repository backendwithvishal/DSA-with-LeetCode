var minEatingSpeed = function(piles, h) {
    // Minimum possible speed
    let left = 1;

    // Maximum possible speed
    let right = Math.max(...piles);

    // Check if Koko can finish within h hours
    function canFinish(speed) {
        let hours = 0;

        for (let pile of piles) {
            // Hours needed for this pile
            hours += Math.ceil(pile / speed);
        }

        return hours <= h;
    }

    // Binary Search on eating speed
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (canFinish(mid)) {
            // Try a smaller speed
            right = mid;
        } else {
            // Need a faster speed
            left = mid + 1;
        }
    }

    return left;
};