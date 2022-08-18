// Задача 1
function parseCount(num) {
	let unit = Number.parseInt(num, 10);
	if (Number.isNaN(num)) {
		throw new Error('Невалидное значение');
	}

	return unit;
}

function validateCount(num) {
	try {
		return parseCount(num);
	} catch (error) {
		return error;
	}
}

// Задача 2
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = this.getPerimeter() / 2
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			getPerimeter: () => "Ошибка! Треугольник не существует",
			getArea: () => "Ошибка! Треугольник не существует",
		}
	}
}
