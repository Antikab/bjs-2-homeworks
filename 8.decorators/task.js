function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(','); // получаем правильный хэш
		let objectInCache = cache.find(item => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу

		if (objectInCache) { // если элемент найден
			console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
			return "Из кэша: " + objectInCache.value;
		} else {
			let value = func.call(this, ...args); // в кэше результата нет - придётся считать
			cache.push({ hash, value }); // добавляем элемент с правильной структурой

			if (cache.length > 5) {
				cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
			}
			console.log("Вычисляем: " + value);
			return "Вычисляем: " + value;
		}
	}
	return wrapper;
}

function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		wrapper.allCount++;

		if (timeoutId) {
			clearTimeout(timeoutId);
		} else {
			func(...args);
			wrapper.count++;
		}

		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}
	return wrapper;
}