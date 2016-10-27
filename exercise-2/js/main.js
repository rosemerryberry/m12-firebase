// Main.js
$(function() {

	// Setup: Initialize Firebase using the configuration of your project

	var config = {
	    apiKey: "AIzaSyBnwzfKPel2oJIiyF5nPC_EYE6aCTnL-xY",
	    authDomain: "m12exercise2.firebaseapp.com",
	    databaseURL: "https://m12exercise2.firebaseio.com",
	    storageBucket: "m12exercise2.appspot.com",
	    messagingSenderId: "819704028188"
	};
	firebase.initializeApp(config);


	// Set a reference to a "photos" point in your database
	var storage = firebase.storage();

	var dataRef = storage.ref('photos');

	//var photos = firebase.database().ref('photos');


	// Create a variable to store the firebase storage object


	// Set listener: when an child is added, render each photo
	photos.on('child-added', function(snapshot) {



		// Get the value of the data
		//key value pairs?
		var data = snapshot.val();



		var value = data[key];

		console.log('url');
		// Using jQuery, create a new img element with the URL of your data
		var img = $("<img>".attr("src", data.url));

		// Append your img to your element with id photos

	});


	// Reading Data: Form submission

		// Get the file
		var file = $("#file-upload")[0].files[0];

		// Create a reference on Firebase storage using the filename
		var photosRef = storage.ref(file.name);
		// Put a file in the specified location, then...
		photosRef.put(file).then(function() {
			photosRef.getDownloadURL().then(function(url) {
				dataRef.push({
					url:url;
				});
			});
		});

			// Get the download URL from the reference, then...

				// Push the URL as a new child into your data structure

		
