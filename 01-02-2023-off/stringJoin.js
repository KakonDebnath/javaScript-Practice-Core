function stringConcat(str1, str2){
    //write your code here
    //don't forget to write return
    let result = "";
    // result = str1 + " " +  str2;
    result = result.concat(str1 ," ", str2);
    return result;

}

let str1 = "I am going to be" ;
let str2 = "an awesome web developer";

let result = stringConcat(str1, str2);
console.log( result);