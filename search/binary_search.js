/**
 * 二分查找,对有序数组查找，分治法，分治法一般可以用递归来实现
 * 递归虽容易理解，但是运行速度慢，容易爆栈。尾递归不需要保存每次递归状态，所以更节省空间。
 */
let mock = require('../sort/mock').mock_arr_data;

let data = mock(10).sort((a, b) => {
    return a - b
});
console.log('data', data);

const binary_search = (data, low, high, target) => {
    let mid = ~~((high-low)/ 2);
    if (target === data[mid]) return data[mid];
    else if (target > data[mid]) {
        return binary_search(data, mid, high, target)
    } else if (target < data[mid]) {
        return binary_search(data, low, mid, target)
    }
};

console.log(binary_search(data,0,9,data[1]));