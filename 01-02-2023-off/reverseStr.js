function getReverseStr (str){
    const splitStr = str.split("");
    const reverseStr = splitStr.reverse();
    const joinStr = reverseStr.join("");
    console.log(joinStr);
}
let str = "Bangladesh";
const reverse = getReverseStr(str);