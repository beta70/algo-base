const Node = require('./node.js')
const LinkedList = require('./linkedList.js')

class Graph {
    constructor(vertices) {
        this.vertices = vertices
        this._adjacencyList = []

        for (let i = 0; i < vertices; i++) {
            const linkedList = new LinkedList()
            this._adjacencyList.push(linkedList)
        }
    }

    get adjacencyList() {
        const list = []
        for (let i = 0; i < this._adjacencyList.length; i++) {
            list.push(`[${i}]=> ${this._adjacencyList[i].nodes}${this._adjacencyList[i].nodes.length > 1 ? '-> null' : 'null'}`)
        }

        return list
    }

    addEdge(source,target) {

        this._adjacencyList[source].prepend(target)

    }

}


const graph = new Graph(5)
graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(1,3)
graph.addEdge(2,3)
graph.addEdge(0,4)
graph.addEdge(3,4)


console.log(graph.adjacencyList);

// const graph = {
//     a: [b,c,d],
//     b: [c,e],
//     c: {}
// }