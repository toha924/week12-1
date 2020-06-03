import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const Reporeadme = (props) => {
  return (
    <div>
      <div id="title">Readme</div>
      <ReactMarkdown
        id="description"
        className="bg-teal-400 text-white p-1"
        source={props.readme}
      />
      <Link to="/:user">К списку репозиториев</Link>
      <Link to="/">На главнуЮ</Link>
    </div>
  )
}

Reporeadme.propTypes = {}

export default React.memo(Reporeadme)
