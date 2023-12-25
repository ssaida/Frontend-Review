const ul = document.querySelector('.ul');
const speak = function(name, time='Every Time'){
    console.log(`Good ${time} ${name}`);
};
speak('Samer Sida');
const calcArea = function(radius){
    return Math.PI * Math.pow(radius, 2);
};
console.log(calcArea(5));

console.log('Arrow:');
const calcAreaArrow = radius => Math.PI * Math.pow(radius, 2);
console.log(calcAreaArrow(5));
let people = ['Samer Saida','Salih Saida','Omar Ahmad'];
let html = '';

people.forEach((person, index) => {
    console.log(`Person ${person} at index ${index}`);
    html += `<li style="font-size:30px;">${person} - ${index}</li>`
});
ul.innerHTML = html;