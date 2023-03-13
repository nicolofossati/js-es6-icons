/* 
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

const data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const mainDom = document.querySelector(".cards-container");

print_array(data);

const selectDom = document.querySelector('#choose');

selectDom.addEventListener('change', function(){
    const value = this.value;
    const dataFiltered = data.filter((obj) => {
        if(value == "all"){
            return true;
        } else if(obj.type == value){
            return true;
        }
        return false;
    });
    print_array(dataFiltered);
});

function print_array(array){
    mainDom.innerHTML = "";
    array.forEach(obj => {
        const newCardDom = document.createElement('div');
        newCardDom.classList.add('card');
        const iconDom = document.createElement('i');
        iconDom.classList.add(`fa-solid`);
        iconDom.classList.add(`${obj.prefix}${obj.name}`);
        iconDom.style.color = `${obj.color}`;
        const spanDom = document.createElement('span');
        newCardDom.appendChild(iconDom);
        newCardDom.appendChild(spanDom);
        spanDom.innerHTML = `${obj.name.toUpperCase()}`;
        mainDom.appendChild(newCardDom);
    });
}
