function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    let stack = [0, array.length - 1]; // Initialize the stack with indices
    while (stack.length > 0) { // Continue while there are elements in the stack
        let high = stack.pop(); // Pop the high index
        let low = stack.pop(); // Pop the low index
        let pivot = partition(array, low, high); // Partition the array
        if (pivot - 1 > low) {
            stack.push(low); // Push the low index of the left partition
            stack.push(pivot - 1); // Push the high index of the left partition
        }
        if (pivot + 1 < high) {
            stack.push(pivot + 1); // Push the low index of the right partition
            stack.push(high); // Push the high index of the right partition
        }
    }
    return array;
}

function swap(array, first, second) {
    let tmp = array[first];
    array[first] = array[second];
    array[second] = tmp;
    return array;
}

function partition(array, low, high) {
    let pivot = low;
    for (let i = low + 1; i <= high; i++) {
        if (array[i] < array[low]) {
            swap(array, ++pivot, i);
        }
    }
    swap(array, low, pivot);
    return pivot;
}
