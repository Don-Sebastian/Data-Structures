class Graph{
    constructor() {
        this.noOfNodes = 0;
        this.adjecentList = {};
    }
    addVertex(node) {
        this.adjecentList[node] = [];
        this.noOfNodes++;
    }
    addEdge(node1, node2) {
        // undirected graph
        this.adjecentList[node1].push(node2);
        this.adjecentList[node2].push(node1);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjecentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjecentList[node];
            let connections = '';
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
        console.log(this);
    }
    removeEdge(node1, node2) {
        this.adjecentList[node1] = this.adjecentList[node1].filter((v) => v !== node2);
    }
    removeVertex(node) {
        while (this.adjecentList[node].length) {
            const value = this.adjecentList[node].pop();
            this.removeEdge(value, node);
        }
        delete this.adjecentList[node];
    }
    DFSGraphRecursive(start) {
        let result = [];
        let visited = {};
        let adjecentList = this.adjecentList;
        (function dfs(vertex) {
            if (vertex === null) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjecentList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor);
            });
        })(start);
        return result;
    }
    BFSGraph(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
        while (queue.length) {
            
            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjecentList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

const obj = new Graph();
obj.addVertex(0);
obj.addVertex(1);
obj.addVertex(2);
obj.addVertex(3);
obj.addVertex(4);
obj.addVertex(5);
obj.addVertex(6);
obj.addEdge("3", "1");
obj.addEdge("3", "4");
obj.addEdge("4", "2");
obj.addEdge("4", "5");
obj.addEdge("1", "2");
obj.addEdge("1", "0");
obj.addEdge("0", "2");
obj.addEdge("6", "5");
obj.removeEdge('0', '2');
obj.removeVertex('4')
obj.showConnections()
console.log(obj.DFSGraphRecursive("5"));
console.log(obj.BFSGraph('0'));