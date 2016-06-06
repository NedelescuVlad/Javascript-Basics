var x = 999;

var factor = 2;

while (x > 1) {
	if (x % factor == 0) 
		x = x / factor;
	else {
		++ factor;
	}
}

console.log(factor);