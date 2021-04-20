//console.log('page loaded');

console.log(document);

//document.getElementById('save').onclick = save;
document.querySelector('#userForm input[type="text"]').onkeyup = function(){save();};
document.querySelector('#userForm input[type="email"]').onkeyup = function(){updateEmail();save();};
document.querySelector('#userForm input[type="password"]').onkeyup = function(){save();};

function updateEmail(){
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
}


function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');

	var pswd = document.querySelector('#userForm input[type="password"]');

	var email = document.querySelector('#userForm input[type="email"]');

	var data = document.querySelectorAll('#userForm input');

	var paragraphs = document.querySelectorAll('#summary p');

	document.querySelector('#summary h1').innerHTML = name.value;
	paragraphs[0].innerHTML = email.value;
	paragraphs[1].innerHTML = pswd.value;
	console.log(name);
	console.log(data);
	console.log('found '+paragraphs.length+' p tags');
}