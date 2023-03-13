/* 
	BONUS
	2- popolare le options della select della milestone 3 dinamicamente.
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

change_color(data);
print_array(data);

const type_array = ['all'];
data.forEach(obj => {
	if(!type_array.includes(obj.type)){
		type_array.push(obj.type);
	}
});

const selectDom = document.querySelector('#choose');

for(let i=0; i<type_array.length; i++){
	const optionDom = document.createElement('option');
	optionDom.value = type_array[i];
	optionDom.innerHTML = type_array[i].charAt(0).toUpperCase() + type_array[i].slice(1).toLowerCase();
	selectDom.appendChild(optionDom);
}

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

function change_color(array){
	array.forEach(obj => {
		obj.color = random_color();		
	});
}

function random_color(){
	let color = "#";
	for(let i=0; i<6; i++){
		color += random_chart();
	}
	return color;
}

function random_chart(){
	const bool = random_includes(0,1);
	if(bool){ //1
		const af = random_includes(1,6);

		if(af==1){
			return "A";
		} else if(af==2){
			return "B";
		} else if(af==3){
			return "C";
		} else if(af==4){
			return "D";
		} else if(af==5){
			return "E";
		} else if(af==6){
			return "F";
		}
	} else { //0
		return random_includes(0,9);
	}
}

function random_includes(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}