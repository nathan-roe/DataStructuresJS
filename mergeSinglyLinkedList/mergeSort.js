function mergeSort(arr){
    if(arr.length <= 1)
    {
        return arr;
    }
    else {
        let middle = Math.floor(arr.length/2)
        let right = arr.splice(middle, arr.length-1);
        let left = arr.splice(0, middle);
        merge(mergeSort(left), mergeSort(right));
    }
}
function merge(left, right){
    console.log(right);
    // let arr = [];
    // let ri = 0;
    // let li = 0;
    // while(left.length > li && right.length > ri)
    // {
    //     if(left[li] > right[ri])
    //     {
    //         arr.push(right[ri]);
    //         ri++;
    //     } else {
    //         arr.push(left[li]);
    //         li++;
    //     }
    // }
}
const array = [5,3,6,4,7,9,8,0,2,1];
console.log(mergeSort(array));
