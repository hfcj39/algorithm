function mock_arr_data(length){
    let arr = [];
    for(let i=0;i<length;i++){
        arr.push(Math.floor(Math.random()*100))
    }
    return arr
}

module.exports = {
    mock_arr_data
};