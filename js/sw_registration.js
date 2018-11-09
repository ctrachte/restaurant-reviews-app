if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service_worker.js')
	// lets log out the service worker to see if it was successful
	.then(function() {
		console.log('Service Worker successfully registered.');
	})
	.catch(function() {
		console.log('Service worker registration failed!');
	});
}
