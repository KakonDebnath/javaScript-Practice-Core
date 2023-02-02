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

for (let i = 1; i <= 10 ; i++){
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