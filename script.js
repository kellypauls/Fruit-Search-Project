const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowercaseFruits = fruit.map(item => item.toLowerCase());
	for(let i = 0; i < lowercaseFruits.length; i++){
		if(lowercaseFruits[i].includes(str.toLowerCase())){
			results.push(lowercaseFruits[i])
		}
	}
	return results;
}

function searchHandler(e) {
	const srcText = e.target.value.toLowerCase();
	const srcResults = search(srcText);
	showSuggestions(srcResults, srcText);
}

function showSuggestions(results, inputVal) {
	const items = results.map((val) => {
		const bold = val.replace(inputVal, inputVal.bold());
		return "<li>" + bold + "</li>";
	});
	suggestions.innerHTML = "<ul>" + items.join('') + "</ul>"
}

function useSuggestion(e) {
	if (e.target.tagName = "LI"){
		input.value = e.target.innerText;
		while(suggestions.firstChild){
			suggestions.removeChild(suggestions.firstChild);
		}
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);