//  1-5 ঘরের নামতা লিখ

// function getNamta(ghor) {
//     let namta = "";
//     for (let i = 1; i <= 10; i++) {
//         namta += ghor + " * " + i + " = " + ghor * i + ". ";
//     }
//     return namta;
//     // console.log(namta);
// }

// const namta = getNamta (ghor);
// console.log(namta);

// ------

// let ghor = 3;
// function namta(ghor) {
//     for(let i = 1; i<= 10; i++) {
//         console.log(ghor + " * " + i + " = " + ghor * i + ". ");
//     }
// }

// namta(ghor);

// ======================

function getNmata() {
    for (let i = 1; i <= 5; i++) {
        let ghor = i;
        // console.log(ghor);
        for (let a = 1; a <= 10; a++) {
            console.log(ghor + " * " + a + " = " + ghor * a + " ");
        }
    }
}

getNmata();