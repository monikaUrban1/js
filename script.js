

function Create(){
var element = document.createElement('div'); //tworzymy nowego Diva
element.id = 'bloczek';
element.style.width = '400px';
element.style.height = '200px';
element.style.backgroundColor = '#FF6638';


var body = document.getElementsByTagName('body')[0]; //pobieramy body
body.appendChild(element); //wstawiamy element do drzewa dokumentu

}
