function getReverseStr(str) {
    let result = "";
    result = str.split("").reverse().join("");
    return result;
}
const str = "Bangladesh";
const result = getReverseStr (str);
console.log(result);