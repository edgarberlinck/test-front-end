import React from 'react'
import './searchbar.css'

const SearchBar = ({value, onChange}) => {
  return (
    <div className="form__group field">
      <input 
        value={value} 
        onChange={event => onChange(event.target.value)} 
        type="input" 
        className="form__field"
        placeholder="Search user by name" 
        name="name" 
        id='name'/>
      <label htmlFor="name" className="form__label">Search user by name</label>
    </div>
  )
}

export default SearchBar