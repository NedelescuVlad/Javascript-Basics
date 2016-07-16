function findEvenlyDivisibleNumber(startNo, endNo) {
	
	var workingNo = 1;
	
	while (true) {
		for (var divider = startNo; divider <= endNo; divider++){
			if (workingNo % divider != 0)
				break;
			else if (divider == 20)
				return workingNo;	
		}

		workingNo++;
	}

}

document.write(findEvenlyDivisibleNumber(1, 20));
