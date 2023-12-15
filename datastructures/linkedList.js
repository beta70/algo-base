class Node {
    constructor(data) {
        this.data = data
    }

    next = null
}

class LinkedList {
    head = null

    get isEmpty() {
        return this.head === null
    }

    get size() {
        let current = this.head
        let count = 0
        
        while (current) {
            count++
            current = current.next
        }

        return count
    }

    get nodes() {
        let nodes = []
        let current = this.head
        
        while (current) {
            if (current === this.head) nodes.push(`[HEAD: ${current.data}]`)
            else if (!current.next) nodes.push(`[TAIL: ${current.data}]`)
            else nodes.push(`[NODE: ${current.data}]`)

            current = current.next
        }   

        return nodes.join('-> ')
    }

    prepend(data) {
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    append(data) {
        let newNode = new Node(data)
        let current = this.head
        let tail = null

        while (current) {
            if (!current.next) tail = current

            current = current.next
        }

        tail.next = newNode
    }

    find(key) {
        let current = this.head

        while (current) {
            if (current.data === key) {
                return current
            }

            current = current.next
        }

        return `Couldn't find ${key} in the linked list.`
    }
}


const linkedList = new LinkedList()

// linkedList.head = n1
linkedList.prepend(3)
linkedList.prepend(6)
linkedList.prepend(9)
linkedList.append(2)
linkedList.prepend(12)
linkedList.append(1)
linkedList.append(500)



console.log(linkedList.nodes);
console.log(linkedList.find(12));









