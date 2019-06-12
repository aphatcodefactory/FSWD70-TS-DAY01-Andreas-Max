// Define for each variable/array the data type
// List the array items and make sure that it has a strict data type definition
// Fetch Array items by employing Array Destructuring concept
// Provide the functionality for giving a comment for some product
// Provide the functionality for giving a rating for some product and increment/decrement it
// Use some loop for displaying the data into the Page (forEach, For in or For-of)
// Define some appropriate value as const
// Define for each variable/array the data type
var nummer = [];
var _loop_1 = function () {
    var y = i;
    nummer.push(function (a) {
        // console.log(y);
        // let z: any = y + " x " + a + " = " + y * a + "<br><br>";
        document.write(y + " x " + a + " = " + y * a + "<br><br>");
        // document.getElementById("test").innerHTML = z;
    });
};
for (var i = 1; i < 11; i++) {
    _loop_1();
}
nummer.forEach(function (rechnung) {
    rechnung(1);
    rechnung(2);
    rechnung(3);
    rechnung(4);
    rechnung(5);
    rechnung(6);
    rechnung(7);
    rechnung(8);
    rechnung(9);
    rechnung(10);
});
