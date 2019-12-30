/**
 * 判断是否同一数组
 * @param formArr
 * @param toArry
 * @returns {boolean}
 */
export const isEqual = (formArr, toArry) => {
    for (let i in formArr) {
        if (formArr[i] !== toArry[i]) {
            return false
        }
    }
    return formArr.length === toArry.length;
}

/**
 * 判断是否不同数组
 * @param formArr
 * @param toArry
 * @returns {boolean}
 */
export const isNotEqual = (formArr, toArry) => {
    return !isEqual(formArr, toArry);
}

/**
 * 随机数组
 * <p>
 *  初始逆序为0, 随机交互的次数为偶数次， 则可还原
 * </p>
 * @param count
 * @returns {Array}
 */
export const randomArr = (count) => {
    let arr = [];
    for (let i =1 ;i <count; i++) {
        arr.push(i);
    }

    let j = 1;
    let swapNum = count;
    swapNum = (count & 1) === 0 ? swapNum+1 : count;
    while(j < swapNum ) {
        let fromRandom = Math.floor(Math.random() * (count-1));
        let toRandom = Math.floor(Math.random() * (count-1));
        if (fromRandom !== toRandom) {
            let temp = arr[fromRandom] ;
            arr[fromRandom] = arr[toRandom];
            arr[toRandom] = temp;
            j++;
        }
    }
    return arr;
}
