function compareArrays(arr1, arr2) {
	let result;
	result = arr1.length === arr2.length & arr1.every((item, index) => item === arr2[index])

	return result; // boolean
}

compareArrays([1, 2, 3], [1, 2, 3]);

function advancedFilter(arr) {
	let resultArr;
	resultArr = arr.filter(num => num > 0).filter(num => num % 3 === 0).map(num => num * 10);
	return resultArr; // array
}

advancedFilter([1, 2, -3, 4, 5, -6]);
advancedFilter([1, 2, 3, 4, 5, 6]);