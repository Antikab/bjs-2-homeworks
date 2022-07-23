// Задание 1
function getArrayParams(arr) {
	let min, max, sum, avg;
	min = arr[0];
	max = arr[0];
	sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		};
		sum += arr[i];
	}

	avg = +((sum / arr.length).toFixed(2));

	return { min: min, max: max, avg: avg };
}

/// Задание 2
function worker(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function makeWork(arrOfArr, func) {
	let max = 0;
	let sum = 0;

	for (let i = 0; i < arrOfArr.length; i++) {
		sum = func(arrOfArr[i]);

		if (sum > max) {
			max = sum;
		}
	}

	return max;
}

// Задание 3
function worker2(arr) {
	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		};
	}

	return Math.abs(max - min);
}

console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];

makeWork(arrOfArr, worker2); // 98
console.log(makeWork(arrOfArr, worker2));