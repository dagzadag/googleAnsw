var pageTitle = document.title
var config = {
		apiKey: "AIzaSyACSgbAIM01KGI_twhGzX1FABWyhhCS3Eo",
		authDomain: "test-6ee2a.firebaseapp.com",
		databaseURL: "https://test-6ee2a.firebaseio.com",
		projectId: "test-6ee2a",
		storageBucket: "test-6ee2a.appspot.com",
		messagingSenderId: "448582725279"
	}
firebase.initializeApp(config)
var scoresRef = firebase.database().ref('GoogleAnsewres');
var arrInside =[]
var ansArray = []
function addTheAnsw(){

	scoresRef.orderByValue().on("value", function(snapshot) {
	   	snapshot.forEach(function(data) {
			arrInside = []
			arrInside.push(ansArray.length)
			arrInside.push(data.val())
			ansArray.push(arrInside)
		})   
	});	
}
setTimeout(function (){
	addTheAnsw()
},3000)
