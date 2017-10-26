module.exports = {
function translatePost(inp) {

//Input
var post = inp
//Output
// var post2 = document.posttranslator.postcontent2;
//var type = document.posttranslator.drunkenness.options[document.posttranslator.drunkenness.selectedIndex].value;

post = post.split(" ");

var drunk = 6;

for (i=0;i<post.length;i++) {

	var chance = Math.floor(Math.random()*10);

	// Drunk word here

	// if (chance >= drunk) {

		post[i] = post[i].split("");
		n = post[i].length;

		// Add in a random letter

		// Create New Array

		var addChance = Math.floor(Math.random()*10);

		if (addChance >= drunk) {

			var add = new Array("q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m");

			var pickAdd = Math.floor(Math.random()*26);
			var pickPoint = Math.floor(Math.random()*n);

			word = post[i].splice(pickPoint,0,add[pickAdd]);
		}


		var mixChance = Math.floor(Math.random()*10);

		if (mixChance >= drunk) {
		// Mix up the letters
		// We only want to mix up

		// Pick first letter in the range
		pickLetter = Math.floor(Math.random()*n);

		//
		pickLetter2 = pickLetter + Math.floor(Math.random()*n) + 1;

		if (pickLetter2 > n) {
			pickLetter2 = n;
		}

		word = post[i].slice(pickLetter,pickLetter2);

		word = word.sort(function() {return 0.5 - Math.random()})
		word = word.sort(function() {return 0.5 - Math.random()})
		word = word.sort(function() {return 0.5 - Math.random()})
		word = word.sort(function() {return 0.5 - Math.random()})

		word = word.join("");
		toRemove = pickLetter2 - pickLetter;
		word = post[i].splice(pickLetter,toRemove,word);
	}
		// Output string plz...work on it

		post[i] = post[i].join("");

		post[i] = post[i].toString();
		post[i] = post[i].toLowerCase();


	// }

}

// End

var drunkPost = post.join(" ");

console.log(drunkPost)
	return drunkPost
}
}
