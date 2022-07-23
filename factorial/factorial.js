// Everyone hates recursive functions HSHSAHASU

function factorial(value){
    if (value == 1){
        return 1;
    }
    return value * factorial(value - 1);
}
//showing in console

console.log(factorial(5))