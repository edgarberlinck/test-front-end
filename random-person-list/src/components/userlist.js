import React, { useState, useEffect } from 'react'
import { Loading, SearchBar, User } from '../components'
import { Layout, GridDisplay } from '../containers'

const UserList = ({loading, data}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [userListWithFilter, setInternalList] = useState(data)

  const tryToRenderData = () => {
    if (loading)
      return <Loading />

    if (userListWithFilter && userListWithFilter.length > 0) {
      return renderList(userListWithFilter)
    }

    return 'No data found'
  }
  
  const renderList = (listToRender) => {
    return (
      <GridDisplay>
        {listToRender.map(element => <User key={element.id} name={element.name} avatar={element.avatar} age={element.age}></User>)}
      </GridDisplay>
      )
  }

  useEffect(() => {
    const filteredList = data.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setInternalList(filteredList)  
  }, [searchTerm, data])

  return (
    <Layout>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      { tryToRenderData() }
    </Layout>
  )
}

export default UserList