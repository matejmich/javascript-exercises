const fibonacci = function(a) {
    a = 0 + a
    let p = 1;
    let c = 1;
    let n;
if (a <= 0) {
    return "OOPS"
}
if (a <= 2) {
    return 1
}
else {
    for (i = 2; i < a; i++) {
        n = p + c;
        p = c;
        c = n;
        
    }
    return n;
}

};

// Do not edit below this line
module.exports = fibonacci;
