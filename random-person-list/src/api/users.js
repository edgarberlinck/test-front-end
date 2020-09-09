import client from '../client'
import uuid from 'react-uuid'

const UsersApi = {
  list: async () => {
    const usersList = await client.get('/users')
      .then(response => response.data)
      .then(response => response.data.slice(0,1000))
      .then(response => response.map(user => ({ id: uuid(), avatar: `https://ui-avatars.com/api/?name=${user.name}&background=2b7dbd&color=fff&size=150`, ...user })) )

    return usersList
  }
}

export default UsersApi