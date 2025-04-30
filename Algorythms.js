// Find repeated/not repeated values in array (avoiding Set).

let nums = [2,1,2,3,4,1]
function singleNumber(nums) {
    let result = []
    let obj = {}
    nums.forEach((item) => {
        obj[item] = obj[item] ? 0 : 1
        // obj[item] = (item in obj) ? 0 : 1
    })  // Here for each array item we create field in obj. Field's value will be: 0 if item repeated; 1 if item didn't repeate.
    for(let [key, value] of Object.entries(obj)) {
        if(value === 1) {  // If item didn't repeat we push it to result.
            result.push(key)
        }
    }
    return result
};
