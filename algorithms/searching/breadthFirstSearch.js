const graph = {
    'a': ['b','c','d'],
    'b': ['e'],
    'c': [],
    'd': ['f','g'],
    'e': [],
    'f': [],
    'g': [],
}

/*

         a
       / | \
      b  c  d
      |    / \
      e   f   g                  
            

*/


const bfs = (graph, start = Object.keys(graph)[0], target = null) => {

    let currNode = start
    const queue = [currNode]
    const visited = new Set()

    console.log(`visiting node: ${currNode}`);

    while (queue.length) {
        currNode = queue.pop()
        
        if (!visited.has(currNode)) {
            visited.add(currNode)
            
            for (const node of graph[currNode]) {
                queue.unshift(node)

                console.log(`visiting node: ${node}`);
                if (target && target === node) {
                    console.log(`found target: ${target}`);
                    return
                }
            }
        }
    }



}

bfs(graph,'d','h')