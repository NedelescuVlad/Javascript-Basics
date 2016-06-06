var f1 = 1;
var f2 = 2;
var f3 = 0;
var sum = 2;

while (f3 < 4000000) {
	f3 = f1 + f2;

	if (f3 % 2 == 0)
		sum += f3;

	f1 = f2;
	f2 = f3;
}

console.log(sum);