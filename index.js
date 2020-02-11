module.exports = function() {
	const notifier = require('node-notifier');

	notifier.notify('Notifier Active');

	setInterval(function() {
		notifier.notify({
		  title: 'Stretch your wrist.',
		  message: 'Idiot',
		  icon: 'C:\Users\harry\Apps\notifications\hand.jpeg'
		});
	}, 3600000);

	setInterval(function() {
		notifier.notify({
		  title: 'Look at something 10 metres away.',
		  message: 'Idiot',
		  icon: 'C:\Users\harry\Apps\notifications\eye.png'
		});
	}, 3600000 / 3);

	console.log('Notifier Active');
}

