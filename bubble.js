function bubbleSort(arr) {
    let i = arr.length;
    let swapped = true;
    while (swapped && i > 0){
        swapped = false;
        for (let j = 0; j < i; j++){
            if (arr[j] > arr[j+1]){
                swapped = true;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        i--;
    }
    return arr;
}

module.exports = bubbleSort;