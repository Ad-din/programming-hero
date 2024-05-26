#include <iostream>
#include <vector>
#include <queue>

using namespace std;

// Function to perform BFS on the graph
void bfs(vector<vector<int>>& graph, int source, vector<int>& parent) {
    int n = graph.size();
    vector<bool> visited(n, false);
    queue<int> q;

    q.push(source);
    visited[source] = true;
    parent[source] = -1; // No parent for source vertex

    while (!q.empty()) {
        int u = q.front();
        q.pop();

        for (int v : graph[u]) {
            if (!visited[v]) {
                q.push(v);
                visited[v] = true;
                parent[v] = u; // Set parent of v as u
            }
        }
    }
}

int main() {
    int numVertices = 7;
    vector<vector<int>> graph(numVertices);
    vector<int> parent(numVertices);

    // Add edges to the graph
    graph[0].push_back(2);
    graph[0].push_back(3);
    graph[0].push_back(4);
    graph[1].push_back(0);
    graph[1].push_back(3);
    graph[2].push_back(1);
    graph[3].push_back(5);
    graph[3].push_back(6);
    graph[4].push_back(3);

    // Perform BFS starting from vertex 0
    bfs(graph, 0, parent);

    // Display parent array
    cout << "Parent Array:\n";
    cout << "Index: ";
    for (int i = 0; i < numVertices; ++i)
        cout << i << " ";
    cout << "\nParent: ";
    for (int p : parent)
        cout << p << " ";
    cout << endl;

    return 0;
}
