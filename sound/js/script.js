
// var audioElements = [
// 	document.getElementById("audio1"),
// 	document.getElementById("audio2"),
// 	document.getElementById("audio3")
//   ];

//   // Set the loop property for each audio element
//   audioElements.forEach(function(audio) {
// 	audio.loop = true;
// 	audio.play();

//   });




// var audio = document.querySelector(".audio");
// var pause = document.querySelector(".pause");


// function togglePlay() {
// 	if (audio.paused) {
// 		audio.play();
//     pause.innerHTML = "🔊";
//     pause.style.backgroundImage= "linear-gradient(to right, #ff000000, #00ff00)";

// 	} 
// 	else {
// 		audio.pause();
// 		pause.innerHTML = "🔇";
// 		pause.style.backgroundImage = "linear-gradient(to right, #ff000000, #ff0000)";
// 	}

// } 


window.onload = function () {
	setTimeout(() => {

		var audioElements = [
			document.getElementById("audio1"),
			document.getElementById("audio2"),
			document.getElementById("audio3")
		];

		// Set the loop property for each audio element
		audioElements.forEach(function (sound) {
			sound.volumn = 0.2;
			sound.loop = true;
			sound.play();
		});


		







		// audio.
		// audio.volume = 0.2;

		// audio.loop = true; //if you want it to restart playing automatically when it ends
		//   audio.play();
	}, 3000);
}