import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Head from './head'
import Header from './header'
import Inputuser from './inputuser'
import Repolist from './repolist'
import Reporeadme from './reporeadme'

const Home = () => {
  const { user, repo } = useParams()
  const [repolist, setRepolist] = useState([])
  const [readme, setReadme] = useState([])

  const url = `https://api.github.com/users/${user}/repos`
  const readmeUrl = `https://api.github.com/repos/${user}/${repo}/readme`
  useEffect(() => {
    if (typeof user !== 'undefined') {
      axios.get(url).then((it) => {
        setRepolist(it.data.map(({ name, id }) => ({ name, id })))
      })
    }
  }, [url, user])
  useEffect(() => {
    if (typeof user !== 'undefined' && typeof repo !== 'undefined') {
      axios.get(readmeUrl).then((it) => {
        setReadme(atob(it.data.content))
      })
    }
  }, [readmeUrl, user, repo])
  return (
    <div className="container mx-auto bg-grey-300">
      <Head title="Hello" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Inputuser />} />
        <Route exact path="/:user" component={() => <Repolist repolist={repolist} />} />
        <Route exact path="/:user/:repo" component={() => <Reporeadme readme={readme} />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
