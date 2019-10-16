const getPokemonAPI = () => {
	const id = document.getElementById("search-query").value;
	console.log(id);
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	console.log(url);
	fetch(url, {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	})
		.then((res) => res.json())
		.then((data) => {
			//reset container
			console.log(data);
		})
		.catch(console.log("Server Error"));
};

// const getTodos = (url, method, changingTag) => {
// 	fetch(`${url}${method ? "/" + method : ""}`, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	})
// 		.then(res => {
// 			res.json().then(json => {
// 				resetTodosContainer();
// 				addTodosToPage(json);
// 				if (!changingTag) {
// 					getTags(json);
// 				}
// 			});
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});
// };
