var array = [1,2,3,4,5,6,7,8,9,10];

for (var value of array) {
	for (var number of array) {
		var string = value + ' x ' + number + ' = ' + (value * number) + '<br>';

		document.write(string);
	}

	document.write('<br><hr><br>');
}