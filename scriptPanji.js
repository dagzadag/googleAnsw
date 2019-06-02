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
var ansArray = []
function addTheAnsw(){
	var sub = document.title 
	var theQues = sub.replace(" - School 4 SEOs","")
	var ans = document.querySelector('strong').innerText
	scoresRef.push(theQues + " _Ans_ " + ans)	
}
setTimeout(function (){
	addTheAnsw()
},3000)
