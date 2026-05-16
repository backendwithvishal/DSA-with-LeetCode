// 904 question on leetcode

function totalFruit(fruits) {
    let left      = 0;    // left boundary of window
    let maxFruits = 0;    // longest valid window seen so far
    const basket  = new Map(); // fruit type → count in current window

    for (let right = 0; right < fruits.length; right++) {
        const rightFruit = fruits[right];

        // add right fruit to basket (increase its count)
        basket.set(rightFruit, (basket.get(rightFruit) || 0) + 1);

        // window invalid → more than 2 fruit types → shrink from left
        while (basket.size > 2) {
            const leftFruit = fruits[left];

            // reduce count of left fruit
            basket.set(leftFruit, basket.get(leftFruit) - 1);

            // if count hits 0 → fruit type completely left the window → remove from basket
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }

            left++; // shrink window
        }

        // window is valid (at most 2 types) → update best
        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
}