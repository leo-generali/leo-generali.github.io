var aboutBtn = document.getElementById('about-btn');
var contactBtn = document.getElementById('contact-btn');
var projectBtn = document.getElementById('project-btn');

var aboutPage = document.getElementById('about');
var contactPage = document.getElementById('contact');
var projectPtage = document.getElementById('projects');

aboutBtn.addEventListener('click', aboutButtonPress);
contactBtn.addEventListener('click', contactButtonPress);
projectBtn.addEventListener('click', projectButtonPress);

function aboutButtonPress(e){
	console.log('about');
	aboutPage.classList.remove('inactive');
	contactPage.classList.add('inactive');
	projectPtage.classList.add('inactive');
}

function contactButtonPress(e){
	console.log('contact');
	aboutPage.classList.add('inactive');
	contactPage.classList.remove('inactive');
	projectPtage.classList.add('inactive');
}

function projectButtonPress(e){
	console.log('proj');
	aboutPage.classList.add('inactive');
	contactPage.classList.add('inactive');
	projectPtage.classList.remove('inactive');
}