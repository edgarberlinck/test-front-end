import React, { useState, useEffect } from 'react';

import { UserList } from './components'
import { UsersApi } from './api'

function App() {
  const [userList, setUserList] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    UsersApi.list()
      .then(apiResponse => setUserList(apiResponse))
      .then(() => setLoading(false))
  }, [])

  return (
    <UserList loading={isLoading} data={userList} />
  )
}

export default App;
