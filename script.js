const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// turning fruits to lowercase to compare with string
	const lowercaseFruits = fruit.map(item => item.toLowerCase());
	for(let i = 0; i < lowercaseFruits.length; i++){
		if(lowercaseFruits[i].includes(str.toLowerCase())){
			results.push(lowercaseFruits[i])
		}
	}
	// if fruit includes the string typed into the input, push that into results array
	return results;
}

function searchHandler(e) {
	// selecting text input and plugging that into search function
	const srcText = e.target.value.toLowerCase();
	const srcResults = search(srcText);
	// taking these two variables and using them in showSuggestions function
	showSuggestions(srcResults, srcText);
}

function showSuggestions(results, inputVal) {
	// map over results form search function, replace the letters that are input with bold letters to highlight them in the suggestions list
	const items = results.map((val) => {
		const bold = val.replace(inputVal, inputVal.bold());
		return "<li>" + bold + "</li>";
	});
	// adding the items to the ul dropdown menu
	suggestions.innerHTML = "<ul>" + items.join('') + "</ul>"
}

function useSuggestion(e) {
	// if we select a value that has an LI tag, make the input value the inner text of that LI
	if (e.target.tagName = "LI"){
		input.value = e.target.innerText;
		// when selected, remove the suggestion from the list and just have the input with the selected fruit
		while(suggestions.firstChild){
			suggestions.removeChild(suggestions.firstChild);
		}
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);