
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('table');
var contents = document.createElement('tr');

var title = document.createElement('th');
title.innerHTML = "title";
contents.appendChild(title);

var year = document.createElement('th');
year.innerHTML = "year";
contents.appendChild(year);

var isbn = document.createElement('th');
isbn.innerHTML = "isbn";
contents.appendChild(isbn);

var authors = document.createElement('th');
authors.innerHTML = "authors";
contents.appendChild(authors);

list.appendChild(contents);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var column = document.createElement('tr');

	var title = document.createElement('td');
	title.innerHTML = books[i].title;
	column.appendChild(title);

	var year = document.createElement('td');
	year.innerHTML = books[i].year;
	column.appendChild(year);

	var isbn = document.createElement('td');
	isbn.innerHTML = books[i].isbn;
	column.appendChild(isbn);

	var authors = document.createElement('td');
	authors.innerHTML = books[i].authors;
	column.appendChild(authors);

	var test = books[i].title;
	console.log(test);
	column.addEventListener("click", function(){
		changeTitle(test);
	});
	list.appendChild(column);
}
function changeTitle(title){
	console.log(title);
	var name;
	if(!document.querySelector("#bookname")) {
		name = document.createElement('h1');
		name.id = "bookname";
		document.body.appendChild(name);
	} else name = document.querySelector("#bookname");
	name.innerHTML = title;
}

var selectedTitle = document.createElement('h1');
selectedTitle.id = "bookname";
selectedTitle.innerHTML = books[0].title;

document.body.appendChild(selectedTitle);
document.body.appendChild(list);
