import axios from "../services"

const id = 1
async function getData() : Promise<void> {
  try {
    const response = axios(`${id}`).then(res => console.log(res))
    console.log(response)
  } catch (error) {
    return
  }
}

type Arrays = Array<string> | Array<boolean> | Array<number>
getData()
