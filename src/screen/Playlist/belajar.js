function checkValue(){
    var a= 10
    return a == "10"
}
console.log(checkValue())

var foo = 10 + "20"
console.log(foo)


function addNumber(first,second){
    var count = first + second
    return count
}

console.log(addNumber(5,5))

function checkPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  console.log(checkPrime(40))
  console.log(checkPrime(13))


  const array = [-1,0,3,100, 99, 2, 99];



  function biggestNumber(arr){
      var result=0;
      var i =0;
      for(i=0; i<arr.length; i++){
        if(arr[i]>result){
            result = arr[i]
        }
      }
      return result
  }

//   console.log(biggestNumber(array))




  function factorial(number){
      var answer =1;
      if(number ==0 || number ==1){
          return answer
      }else {
          for(var i =number; i>= 1; i--){
              console.log(i,' ini data i')
              answer = answer * i
          }
          return answer
      }
  }
  console.log(factorial(4))