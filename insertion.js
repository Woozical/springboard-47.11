function insertionSort(arr) {
    const sorted = arr[0] !== undefined ? [arr[0]] : [];
    for(let i = 1; i < arr.length; i++){
        let inserted = false;
        const elem = arr[i];
        for (let j = 0; j < sorted.length; j++){
            if (sorted[j] > elem){
                sorted.splice(j, 0, elem);
                inserted = true;
                break;
            }
        }
        if (!inserted) sorted.push(elem);
    }
    return sorted;
}

module.exports = insertionSort;