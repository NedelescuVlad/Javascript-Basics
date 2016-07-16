function findLargest() {
	var max = 0;
	for (firstNum = 999; firstNum > 0; firstNum--){
		for (var secondNum = firstNum - 1; secondNum > 0; secondNum--) {
			var product = firstNum * secondNum;
			if (isPalindrome(product) && product > max)
				max = product; 
		}
	}

	return max;
}
function isPalindrome(numToCheck) {
	var workingNum = numToCheck;
	var reversedNum = 0;

	while (workingNum > 0) {

		reversedNum = reversedNum * 10 + workingNum % 10;
		workingNum = Math.floor(workingNum/10);
	}

	return reversedNum == numToCheck;
}

document.write(findLargest());
