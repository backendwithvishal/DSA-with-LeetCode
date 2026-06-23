// 133 question on Leetcode

var cloneGraph = function(node) {
    // If graph is empty
    if (!node) {
        return null;
    }

    // Map: original node -> cloned node
    const map = new Map();

    function dfs(node) {
        // If already cloned, return the clone
        if (map.has(node)) {
            return map.get(node);
        }

        // Create a copy of the current node
        const clone = new Node(node.val);

        // Save it in the map
        map.set(node, clone);

        // Clone all neighbors
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
};