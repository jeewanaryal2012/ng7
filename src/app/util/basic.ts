var arr = [1, 2, 3, 40];
var tmp = [];

arr.forEach(function (item, index) {
    for (var i = 0; i < arr.length; i++) {
        if (index !== i) {
            tmp.push({
                first: item,
                second: arr[i],
                sum: item + arr[i]
            });
        }
    }
});


var result = tmp.reduce(function (max, obj) {
    return obj.sum < max.sum ? obj : max;
});

console.log(result);