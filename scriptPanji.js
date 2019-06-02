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
function submitToFirebase () {
	
	var firebaseRef = firebase.database().ref('GoogleAnsewres/')
	var  queArr = pageTitle.split('-')
	var question = queArr[0]
	var a = question.split('.')
	firebaseRef.child(a[0]).set(document.querySelector('strong').innerText);
}
setTimeout(function () {
submitToFirebase()
},2000)
