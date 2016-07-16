function sumOfNaturalSquaresUpTo(upperBound) {
	return upperBound*(upperBound + 1)*(2*upperBound + 1) / 6
}

function squareOfSumUpTo(upperBound) {

	var sum = upperBound * (upperBound + 1) / 2;
	return sum * sum;
}

document.write(squareOfSumUpTo(100) - sumOfNaturalSquaresUpTo(100));

