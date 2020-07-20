//              -5       -4       -3        -2      -1
//                1       2       3        4      5
const nomes = ['Maria','Douglas','Pedro','João','Júlia']

/** Função Splice
 * 1° índice - Qual indice quero começar a mexer?
 * 2° índice - Quantos elementos quero remover do meu array?
 * 3° índice - Elementos a adicionar
 * 3° índice - Elementos a adicionar
 * 
 * nomes.splice(indice, delete, elem1, elem2, elem3)
 */

/**
 *  Simulando splice
 */
let removed = nomes.splice(-3,1) // Começa no indice -3 ('Pedro') e remova um elemento
removed = nomes.splice(-3,0,'Felipe') // A partir do indice -3 ('Pedro'), não remova nada e add Felipe
removed = nomes.splice(-3,1,'André') // A partir do indice -3 ('Pedro'), remova Pedro e add André

removed = nomes.splice(-5,2,'Paulo','Marcos') // A partir do indice -5, remover Maria e Felipe e adicione Marcos e Paulo

// console.log(nomes, removed)

/**
 * Simulando pop com splice [Final do array]
 */
const fruits = ['Banana','Maçã','Pêra','Goiaba']
fruits.splice(1,1)
// console.log(fruits)

/**
 * Simulando shift [ Começo array ]
 */
fruits.splice(0,2)

/**
 * Simulando push [ Final do Array ]
*/
fruits.splice(fruits.length,2,'Melão','Manga')
