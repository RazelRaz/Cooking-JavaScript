const numbers = [2,13,19,43, 56, 67,88]

const result = numbers.find(function(number){
    return number < 20;
})

console.log(result);