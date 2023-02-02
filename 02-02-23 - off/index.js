// for(var i = 1; i <= 5; i++)
// {
//     printTable(i);
//     println("");
// }

// function printTable(n)
// {
//     for(var i = 1; i <= 10; i++)
//     {
//         var row = n + " * " + i + " = " + n * i;
//         println(row);
//     }
// }

/* for (let i = 1; i <= 10 ; i++){
    // println(i);
    table(i);
}

function table (n){
    console.log(n);
    
    for (let i = 1; i <= 10; i++){
        // console.log(i , n);
        var row = n + " * " + i + " = " + n * i
        console.log(row);
    }
}
 */

// Print the first 10 Fibonacci numbers without recursion

var f0 = 0;
var fibonacci = f0;

var f1 = 2;
var fibonacci = f1;

for (var i = 2; i < 10; i++) {
    var fi = f1 + f0;
    var fibonacci = fi;

    f0 = f1;
    f1 = fi;
}