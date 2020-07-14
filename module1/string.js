// Scape
let string = 'Texto \'opa\'' // Scape
let txt = 'O rato roeu a roupa do rei de roma' // Scape
string = 'Texto'


// Índice
let index = string[4]
index = string.charAt(4)
index = string.charCodeAt(4)

// Concat
index = string.concat(' <-concat')

// Index of 
index = string.indexOf('Texto')
index = string.lastIndexOf('o', 0)

// Expressao regular

index = string.match(/[a-z]/g) // Expressão
txt = txt.replace(/r/g, '#') // Troca
index = string.search(/x/) // Indice

// Tamanho
txt.length

// Cortar string

// console.log(txt.slice(2, 6))
// console.log(txt.substring(txt.length - 4, txt.length - 1))
// txt = txt.split(' ')

txt = txt.split(' ', 2)

// Maiscula e miniscula
let newTxt = 'Novo texto'
newTxt = newTxt.toUpperCase()
newTxt = newTxt.toLowerCase()

console.log(txt)
console.log(newTxt)

