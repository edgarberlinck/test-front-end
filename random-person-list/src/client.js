import axios from 'axios'

const client = axios.create({
  baseURL: 'https://random-persons.herokuapp.com'
})


export default client