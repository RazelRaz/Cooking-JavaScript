const numbers = [2,13,19,43, 56, 67,89];
const box = numbers.filter(function(number){
    return number > 40
})

console.log(box);