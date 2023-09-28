const palindromes = function (str) {
newStr = str.toLowerCase().replace(/[^a-z0-9]/g,"")
if (newStr === newStr.split("").reverse().join("")) {
    return true
}
else {
    return false
}
};

// Do not edit below this line
module.exports = palindromes;
