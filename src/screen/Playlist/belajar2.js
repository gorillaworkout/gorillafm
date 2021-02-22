// Given an array of integer, [1, 5, 9, 13, 25, 3, 0, 45, 61, 99, 120, 52, -32, 196, 99, -64], the candidate needs to create a native JavaScript function to get the minimum, maximum, and margin (difference between minimum and maximum value) from the array with the expected result should be in a type of an object.

// NOTE

// This exercise should be done less than 10 minutes
// JavaScript object function, such as Math object, is not allowed
// Example:

// var stockValue = [1, 5, 9, 13, 25, 3, 0, 45, 61, 99, 120, 52, -32, 196, 99, -64];

// /*
//   expected output
//   {
//     min: -64 ,
//     max: 196 ,
//     margin: 260 `
//   }
// */
// function minMaxMargin(arr) {
//   ...
// }

// minMaxMargin(stockValue);

const stockValue = [-1, -5, -9, -13, -25, -45, -61, -99, -120, -52, -32, -196, -99, -64]

const minMaxMargin=(arr)=>{
    var min;
    var max;  
    console.log(-1 < 0)
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
        if(arr[i]>=max){
            console.log('MAX skrng berubah dari ' + max + 'diganti sama ' + arr[i])
            max = arr[i]
        }else if (arr[i]<min) {
            min = arr[i]
        }

    }
    if(max === 0){
        var margin = min * -1
        return {min,max,margin}
    }
    
    min *= -1
   var margin = min + max
   return {min,max, margin}
}
// console.log(minMaxMargin(stockValue))
// const stockValue = [-1, -5, -9, -13, -25, -45, -61, -99, -120, -52, -32, -196, -99, -64]
var stockValue3 = [1, 5, 9, 13, 25, 3, 0, 45, 61, 99, 120, 52, -32, 196, 99, -64];
const stockValue2 = [-1, -5, -9, -13,-20,-19]
const minMaxMargin2=(arr)=>{

    var min=-1
    var max =-1
    var margin;

 for(var i=0; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }else if (arr[i] < min ){
        // console.log('skrng ' + min + ' berubah jadi ' + arr[i])
        min = arr[i]
    }   
}
    if(max < 0 && min < 0){
        var margin = min * -1 + max 
        return {min,max,margin}
    }else if(min < 0){
        console.log('line 72')
        var margin = min * -1  + max
        return {min,max,margin}
    }
    min *= -1
    var margin = min + max
    return {min,max,margin}
}

console.log(minMaxMargin2(stockValue))