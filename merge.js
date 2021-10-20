function merge(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length){
        if (i >= arr1.length){
            result.push(...arr2.slice(j));
            break;
        } else if (j >= arr2.length){
            result.push(...arr1.slice(i));
            break;
        }

        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length * 0.5);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};