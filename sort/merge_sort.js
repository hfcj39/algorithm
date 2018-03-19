/**
 * 归并排序
 * 和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。
 */
let mock = require('./mock').mock_arr_data;

let data =mock(10);
console.log('data',data);

function merge(left, right) {
    let tmp = [];

    while (left.length && right.length) {
        if (left[0] < right[0])
            tmp.push(left.shift());
        else
            tmp.push(right.shift());
    }
    return tmp.concat(left, right);
}

function mergeSort(a) {
    if (a.length === 1)
        return a;

    let mid = ~~(a.length / 2)
        , left = a.slice(0, mid)
        , right = a.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * 归并排序实际上过程可以看成形成一颗二叉树
 */
console.log(mergeSort(data));