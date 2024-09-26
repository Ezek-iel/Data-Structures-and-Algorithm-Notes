//@ts-check

/**
 * @param {Array<number>} elements
 * @param {number} target
 * @returns {number | undefined}
 * Finds the position of the first occurenct of target in elements
 */
function binarySearch(elements, target) {
    let leftPointer = 0
    let rightPointer = elements.length - 1


    while (leftPointer <= rightPointer) {
        let middlePosition = Math.floor((leftPointer + rightPointer) / 2)
        let middleElement = elements[middlePosition]
        if (target == middleElement) {
            return middlePosition
        }
        if (middleElement > target) {
            rightPointer = middlePosition - 1
        }
        else {
            leftPointer = middlePosition + 1
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))