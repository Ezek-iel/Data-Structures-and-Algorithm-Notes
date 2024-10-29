// @ts-check

/**
 * A function to search a number in a list using binary search returns one if not found
 * @param {Array<number>} elements
 * @param {number} target
 * @returns {number}
 */
function binarySearch(elements, target){
    let leftPointer = 0
    let rightPointer = elements.length

    while (leftPointer <= rightPointer){
        let midpoint = Math.floor((leftPointer + rightPointer) / 2)
        let guess = elements[midpoint]
        if (target == guess){
            return midpoint
        }
        else if (guess < target){
            leftPointer  =  midpoint + 1
        }
        else {
            rightPointer  = midpoint - 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([1,2,3,4,5], 5))
console.log(binarySearch([1,2,3,4,5], 1))
console.log(binarySearch([1,2,3,4,5], 6))