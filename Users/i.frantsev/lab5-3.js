// // part 1
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log("true" == true);
// console.log(1 == true);
// console.log("1" == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// var x = {
//     id: 123,
//     name: "Blah"
// };
// var y = {
//     id: 456,
//     name: "Not Blah, definitely"
// };
// console.log(x == "[object Object]");
// console.log(y == "[object Object]");
// console.log(x == y);
// console.log(1 != true);
// console.log(0 != false);
// console.log(5 != "5");
// var x = new Object();
// console.log(x != "[object Object]");

//part 2

// var k;
// if (k == null) {
//     console.log("k must be defined " + k);
// }

// var k = null;
// if (k == null) {
//     console.log("k must be defined " + k);
// }

// var t = new Date();
// console.log(t);

// var t2 = new Date();
// console.log(t2);
// console.log(t2 == t);

// var x = 10;

// switch (x) {
//     case 10:
//         x = 15;
//         break;
//     case 15:
//         console.log('Question');
//         break;
// }

var x = 64;
console.log(x.toString(2));

var t = x / 2 + x % 2;
var str = "";

while (1) {
    str = (x & 1) + str;
    x = x >> 1;
    if (x == 0) break;
}
console.log(str);