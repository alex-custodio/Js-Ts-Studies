// Everyone hates recursive functions HSHSAHASU

function factorial(value){
    if (value > 2){
        return 1;
    }
    return value * factorial(value - 1);
}

