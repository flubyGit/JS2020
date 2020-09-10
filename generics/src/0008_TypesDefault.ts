/**
 * Record - Chave e Valores com tipos
 * Required - Retorna todas as propriedades de objeto obrigatórias
 * Partial - Retorna todas as propriedades de objeto opcionais
 * Readonly - Retorna todas as propriedades são só leituras
 * Pick - Pega propriedades defnidas num objeto
 * Extract - O que eu vou ter que na outra chave não vai ter
 * Exclude - O que eu vou ter que na outra chave vai ter
 */

const object: Record<string, string | number> = {
  name: 'Felipe',
  age: 18
}


type _PeopleProtocol = {
  name: string;
  surname: string;
  age: number;
}

// Required
type PeopleRequired = Required<_PeopleProtocol>

// Partial
type PeoplePartial = Partial<PeopleRequired>

// Readonly
type PeopleReadonly = Readonly<PeoplePartial>

// Pick
type PeoplePick = Pick<PeopleRequired, 'name' | 'surname'>

const object2: PeopleReadonly = {
  name: 'Felipe',
  surname: 'Felipe',
  age: 18
}

type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type _Exclude = Exclude<ABC,CDE>
type _Extract = Extract<ABC,CDE>


type AccountMongo = {
  _id: string;
  name: string;
  age: number;
}

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}
const accountMongo: AccountMongo = {
  _id: '1927127ashuash',
  name: 'Felipe',
  age: 19
}

function mapAccount(account: AccountMongo): AccountAPI {
  const {_id, ...accountData} = account
  return {
    ...accountData,
    id: _id
  }
}

const accountAPI = mapAccount(accountMongo)

console.log(accountAPI)

