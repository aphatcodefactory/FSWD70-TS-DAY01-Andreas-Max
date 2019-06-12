var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var number = array_2[_a];
        var string = value + ' x ' + number + ' = ' + (value * number) + '<br>';
        document.write(string);
    }
    document.write('<br><hr><br>');
}
