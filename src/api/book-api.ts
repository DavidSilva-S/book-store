const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6602f0c36amsh1295432fc98f5c0p1bde94jsn6d515b83300e',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

fetch('https://hapi-books.p.rapidapi.com/book/56597885', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

export{}