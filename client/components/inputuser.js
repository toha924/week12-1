import React, { useState } from 'react'
// import from 'react-router-dom'
import { history } from '../redux'

const Inputuser = () => {
  const [user, setUser] = useState('')
  const onChange = (e) => {
    setUser(e.target.value)
  }
  const onClick = () => {
    history.push(`/${user}`)
  }
  return (
    <div className="flex-col">
      <input
        id="nput-field"
        type="text"
        className=" block border-2 border-solid px-2 py-1"
        placeholder="Введите имя пользователя"
        value={user}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onClick}
        id="search-button"
        className="border-black border-2 px-1"
      >
        Show repo list
      </button>
    </div>
  )
}

Inputuser.propTypes = {}

export default React.memo(Inputuser)
