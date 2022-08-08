//1. Переменные - Variables (Переменные - это сущности в которых хранятся значения)

// var name = 'Kristian' // VAR - устаревший тип переменных. Сейчас лучше обходится только let, const.
// const lastName = 'Popovich' // тип данных - string / Если в последствии не планируется изменять значение переменной - то лучше использовать const.
const firstName = 'Kristian'
let age = 26 // тип данных - number
const isProgrammer = true // тип данных - boolean

// lastName = 'Ion' //переменные которые находятся в CONST - в последствии невозможно переопределять (менять)...

name = 'Ivan' //переменные которые находятся в VAR - в последствии можно переопределять (менять)...
age = 28 //переменные которые находятся в LET - в последствии тоже можно переопределять (менять)...

console.log(name)
console.log(age)
console.log(isProgrammer)

// 2. Мутирование
console.log('Имя человека: ' + name + ', а возраст человека: ' + age)
console.log(age.toString())
// alert('Имя человека: ' + name + ', а возраст человека: ' + age)
// prompt('Ведите фамилию')

const lastName = prompt('Введите фамилию:')
alert(firstName + ' ' + lastName)