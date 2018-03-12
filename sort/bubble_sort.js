let mock = require('./mock').mock_arr_data;

let data =mock(10);
console.log('data',data);
const swap = (arr, a, b) => {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp
};
/**
 * bubble sort.
 */
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
        if (data[j] > data[j + 1]) {
            swap(data, j, j + 1)
        }
    }
}

console.log('rst',data);