function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(',');
		let objectInCache = cache.find(item => item.hash === hash);

		if (objectInCache) {
			console.log("Из кэша: " + objectInCache.value);
			return "Из кэша: " + objectInCache.value;
		}

		let value = func.call(this, ...args);
		cache.push({ hash, value });

		if (cache.length > 5) {
			cache.shift();
		}

		console.log("Вычисляем: " + value);
		return "Вычисляем: " + value;
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