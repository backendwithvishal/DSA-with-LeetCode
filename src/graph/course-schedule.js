// 207 question on Leetcode

var canFinish = function(numCourses, prerequisites) {
    // Create a graph
    const graph = Array.from({ length: numCourses }, () => []);

    // Build the graph
    for (let [course, prereq] of prerequisites) {
        graph[course].push(prereq);
    }

    // Courses currently being checked
    const visiting = new Set();

    // Courses already checked and safe
    const visited = new Set();

    function dfs(course) {
        // Found a cycle
        if (visiting.has(course)) {
            return false;
        }

        // Already checked this course
        if (visited.has(course)) {
            return true;
        }

        // Start checking this course
        visiting.add(course);

        // Check all prerequisites
        for (let prereq of graph[course]) {
            if (!dfs(prereq)) {
                return false;
            }
        }

        // Done checking this course
        visiting.delete(course);
        visited.add(course);

        return true;
    }

    // Check every course
    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) {
            return false;
        }
    }

    return true;
};