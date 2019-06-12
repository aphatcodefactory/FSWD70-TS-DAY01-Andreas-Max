var nummer = [];
var _loop_1 = function () {
    var y = i;
    nummer.push(function (a) {
        console.log(y);
        // let z: any = y + " x " + a + " = " + y * a + "<br><br>";
        document.write(y + " x " + a + " = " + y * a + "<br><br>");
        // document.getElementById("test").innerHTML = z;
    });
};
for (var i = 1; i < 11; i += 1) {
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
