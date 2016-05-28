portfolioApp.controller('CodepenController', ['FIREBASE_URL', '$firebaseArray', function(FIREBASE_URL, $firebaseArray){
	var self = this;

	var ref = new Firebase(FIREBASE_URL + "/codepens");
	var codepens = $firebaseArray(ref);

	console.log(codepens);

	self.message = "Hello World";
	self.codepens = codepens;
}]);