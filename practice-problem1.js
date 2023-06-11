// sum the array elements with loop (solution 1). Using Reduce

var numbers = [ 10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    const sum = numbers.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
        
    }, 0)
    console.log(sum);
}
