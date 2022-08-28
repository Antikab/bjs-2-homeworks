// тут вы можете вызывать функции из task.js
function testCase() {
	let phoneAlarm = new AlarmClock();
	phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Сеня подъем!'), 1);

	// ошибка нет id
	// phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Сеня подъем!'));

	phoneAlarm.addClock(new Date(new Date().getTime() + 60000).toTimeString().slice(0, 5), () => {
		console.log('Сеня, не спи! замерзнешь!');
		phoneAlarm.removeClock(phoneAlarm.timerId)
	}, 2);

	phoneAlarm.addClock(new Date(new Date().getTime() + 120000).toTimeString().slice(0, 5), () => {
		console.log('Беги, Сеня! Беги!');
		phoneAlarm.stop();
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
	}, 3);

	phoneAlarm.printAlarms();
	phoneAlarm.start();
}

testCase();
