/**
 * 1959年Shell发明； 第一个突破O(n^2)的排序算法；是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序
 */
let mock = require('./mock').mock_arr_data;

const swap = (arr, a, b) => {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp
};

let data = mock(10);

function shellSort(arr) {
    let len = arr.length,
        temp,
        gap = 1;
    console.time('希尔排序耗时:');
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (let i = gap; i < len; i++) {
            let j;
            temp = arr[i];
            for (j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    console.timeEnd('希尔排序耗时:');
    return arr;
}

let rst = shellSort(data);
console.log(rst);