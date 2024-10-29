// @ts-check

/**
 * A Node in a Linked List
 * @class
 */
class NodeObject{

    /**
     * Constructor function for {@link NodeObject}
     * @param {any} cargo 
     * @param {NodeObject | null} next 
     */
    constructor(cargo, next = null){
        this.cargo = cargo
        this.next = next
    }
    toString(){
        return `Node (${this.cargo})`
    }
}
/**
 * A linked list commonly used for sequential access
 * @class
 */
class LinkedList{

    /**
     * Constructor function for {@link LinkedList} class
     * @param {NodeObject | null} head 
     */
    constructor(head = null){
        this.head = head
    }

    /**
     * Checks if a linked list is empty
     * @returns {boolean}
     */
    isEmpty(){
        return !Boolean(this.head)
    }

    /**
     * Prints out a linked list
     * @returns {string}
     */
    toString(){
        if (this.isEmpty()){
            throw new Error("Cannot print an empty Linked List")
        }
        let list_string = ''
        let current = this.head
        while (current){
            if (current.next) {
                list_string += `${current} => `
            }
            else {
                list_string += `${current}`
            }
            current = current.next
        }
        return list_string
    }

    /**
     * Convert an array into a linked list
     * @param {Array<any>} array
     * @returns {LinkedList}
     */
    static fromArray(array){
        let newLinkedList = new LinkedList()
        array.forEach(
            item => {
                newLinkedList.insertAtTail(new NodeObject(item))
            }
        )
        return newLinkedList
    }
    /**
     * Insert a node at the head of the list
     * @param {NodeObject} node 
     * @returns {void}
     */
    insertAtHead(node){
        if (this.isEmpty()){
            this.head = node
        } else {
            let previous = this.head
            this.head = node
            node.next = previous
        }    
    }

    /**
     * Insert a node object at the end of the LinkedList
     * @param {NodeObject} node 
     * @returns {void}
     */
    insertAtTail(node){
        if (!this.head){
            this.head = node
        }
        else {

            let current = this.head
            while (current.next){
                current = current.next
            }
            current.next = node
        }
    }

    /**
     * Get the position of the first occurence of a  node in a particulr list else return -1
     * @param {NodeObject} node
     * @returns {number}
     */
    getPosition(node){
        let position = 0
        let current = this.head

        while (current){
            if (current.cargo ==  node.cargo){
                return position
            }
            position ++
            current = current.next
        }
        return -1
    }
    
    /**
     * Get the node object at a particulet position
     * @param {number} position 
     * @returns {NodeObject}
     */
    getNode(position){
        if (this.isEmpty()){
            throw new Error("Linked List is empty")
        } 

        let count = 0;
        let current = this.head
        while (current) {
            if (count == position){
                return current;
            }
            count++;
            current = current.next
        }
        throw new Error("Out of position")
    }
    /**
     * 
     * @param {NodeObject} node 
     * @param {number} position
     * @returns {void}
     */
    insertAtPosition(node, position){
        let previousNode = this.getNode(position - 1)
        let nodeAtPosition = this.getNode(position)
        node.next = nodeAtPosition
        previousNode.next = node
    }
}

let array = [1,2,3,4,5,6,7,8,9,0]
let l1 = LinkedList.fromArray(array)
l1.insertAtPosition(new NodeObject(63), 2)
console.log(l1.toString());
