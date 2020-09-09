/**
 * Explicação
 * const data = { date: new Date().getFullYear(), now: true }
 *
 * 'O' é um objeto. K é um dos tipos do meu objeto. No caso K seria a chave date e a chave now extendidga
 * do meu objeto O
 *
 */


type getKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K]

const getKey: getKeyFn = (obj, key) => obj[key]

// K é o objeto animals
// O extende todas as keyof['color, vaccines'] de animals
// O = color, vaccines

const animals = {
  color: 'Rosa',
  vaccines: ['Vaccines 1','Vacinnes 2']
}

const vaccines = getKey(animals, 'vaccines')
const color = getKey(animals, 'color')

console.log(vaccines, color)
