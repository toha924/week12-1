import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repo } = useParams()
  return (
    <div className="bg-teal-500 p-1 my-auto text-center">
      <div id="repository-name">{repo || user || 'Welcome'}</div>

      {user && (
        <Link className="border-white-400 border-solid border-2 p-1" id="go-back" to="/">
          {' '}
          Go to Main
        </Link>
      )}
      {repo && (
        <Link className="border-white-400 border-solid border-2 p-1" to={`/${user}`}>
          {' '}
          Go to Profile
        </Link>
      )}
    </div>
  )
}

export default React.memo(Header)
