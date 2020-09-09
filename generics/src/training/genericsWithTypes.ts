type Bank<S> = S

export function withDraw<N, V, S, D>(name: N, value :V,withDraw:S, details: D) : Bank<string> {
  return `${name} está sacando ${withDraw && 'agora'} R$${value} reais e ele é ${details}`
}

const callFn = withDraw('Felipe',3000,true,['Desenvolvedor Júnior'])

console.log(callFn)
