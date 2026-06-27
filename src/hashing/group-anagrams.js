var groupAnagrams = function(strs) {
    // Store groups of anagrams
    let map = new Map();

    for (let str of strs) {
        // Sort characters to create a unique key
        let key = str.split("").sort().join("");

        // Create a new group if key doesn't exist
        if (!map.has(key)) {
            map.set(key, []);
        }

        // Add string to its group
        map.get(key).push(str);
    }

    // Return all groups
    return [...map.values()];
};