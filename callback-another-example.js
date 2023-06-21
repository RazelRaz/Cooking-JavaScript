function sample(a,b, callBack){
    var c = a + b;
    var d = a - b;

    var result = callBack(c, d);
    return result;
}

function sum(a,b) {
    return a + b;
}

const result = sample(5,8, sum);
console.log(result);

const result2 = sample(4,3, function(c, d){
    return c - d;
})
console.log(result2);

const result3 = sample(5,7, function(c,d){
    return c * d
})
console.log(result3);