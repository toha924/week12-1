import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repolist = (props) => {
  const { user } = useParams()
  return (
    <div>
      <div>
        {' '}
        {props.repolist.map((repos) => {
          return (
            <div key={repos.id}>
              <Link to={`/${user}/${repos.name}`}>{repos.name} </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Repolist.propTypes = {}

export default React.memo(Repolist)
