/**
 * True - type predicate
 */

export function bool<T>(bool: T) : bool is T {
  return typeof bool === 'boolean'
}

interface Tech<S> {
  tech: S
}

export default function constr(tech: Tech<string>) : tech is Tech<string> {
  return typeof tech === 'string'
}

console.log(constr({tech: 'Javascript'}))
