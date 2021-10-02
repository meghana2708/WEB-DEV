var arr = [1, 2, 3, 4, 5]
arr.unshift(6)
var new_ar = arr.slice(1, 5)
console.log(arr)
console.log(new_ar)
var new_arr = arr.filter(
    (element, index) => {
        if (element % 2 == 0)
            return true
    }
)
console.log(new_arr)
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) new_arr.push(arr[[i]])
}