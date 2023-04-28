import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import home from './components/home'
import portfolio from './components/portfolio'
import detail from './components/detail'
import about from './components/about'
import login from './components/login'

import { UserContext } from './userContext/userContext'

const App = () => {
  const { userObj } = useContext(UserContext);

  return (
    <UserContext>
      <React.Fragment>
        <NavBar />
        <Switch>
          {
            userObj.success ?
              <>
                <Redirect exact path="/" to="/login" />
                <Route path="/login" component={login} />
              </>

              :
              <>
                <Redirect exact path="/" to="/home" />
                <Route path="/home" component={home} />
                <Route path="/portfolio" component={portfolio} />
                <Route path="/detail" component={detail} />
                <Route path="/about" component={about} />
                <Route path="*" component={home} />
              </>
          }
        </Switch>
        <Footer />
      </React.Fragment>
    </UserContext>
  )
}

export default App;