importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');

var firebaseConfig = {
	apiKey: "AIzaSyAsCDR2nnxxdP3yeyORqo_Tio8xnN_COj0",
	projectId: "hotvue-9e9a7",
	messagingSenderId: "341292527642",
	appId: "1:341292527642:web:dc6674eb34e01b8118e1a3",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
	  body: 'Background Message body.',
	};

	return self.registration.showNotification(notificationTitle, notificationOptions);
}); 