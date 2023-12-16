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
            if (!current.next) {
                tail = current
                break
            }

            current = current.next
        }

        tail.next = newNode
    }

    find(data) {
        let current = this.head

        while (current) {
            if (current.data === data) {
                return current
            }

            current = current.next
        }

        return false
    }

    findAt(index) {
        let current = this.head
        let currentIndex = 0

        while (current) {
            if (currentIndex === index) {
                return current
            }

            current = current.next
            currentIndex++
        }

        return false
    }

    insert(data,index) {
        if (index === 0) {
            this.prepend(data)
            return
        }
        if (index === this.size) {
            this.append(data)
            return
        }

        let newNode = new Node(data)
        let current = this.head
        let currentIndex = 1

        while (current) {
            if (currentIndex === index) {
                newNode.next = current.next
                current.next = newNode
                return
            }

            current = current.next
            currentIndex++
        }
    }

    remove(data) {
        if (!this.find(data)) return false
        
        let current = this.head
        let prev = null

        while (current) {
            // removing the first node
            if (current.data === data && current === this.head) {
                this.head = current.next
                return
            }
            // removing any other node
            if (current.data === data) {
                prev.next = current.next
                return
            }

            prev = current
            current = current.next
        }
        
        return false
    }

    removeAt(index) {
        if (!this.findAt(index)) return false
        let current = this.head
        
        if (index === 0) {
            this.head = current.next
            return
        }
        
        let currentIndex = 1
        let prev = null

        while (current) {
            if (currentIndex === index + 1) {
                prev.next = current.next
                return
            }

            prev = current
            current = current.next
            currentIndex++
        }

        return false
    }
}


const linkedList = new LinkedList()

linkedList.prepend(3)
linkedList.prepend(6)
linkedList.prepend(9)
linkedList.insert(100,0)
linkedList.insert(200,2)
linkedList.insert(500,4)
linkedList.remove(100)
linkedList.removeAt(4)

console.log(linkedList.nodes);









