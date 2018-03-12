let mock = require('./mock').mock_arr_data;

const swap = (arr, a, b) => {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp
};

let data = mock(10);
console.log('data',data);
let minIndex;
for(let i=0;i<data.length;i++){
    minIndex = i;
    for (let j=i+1;j<data.length;j++){
        if (data[j]<data[minIndex]){
            minIndex = j
        }
    }
    swap(data,i,minIndex)
}
console.log('sorted',data);