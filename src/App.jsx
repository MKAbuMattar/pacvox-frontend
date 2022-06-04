import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './views/home/index'
import Login from './views/login'
import Register from './views/register'
import Profile from './views/profile'
import Settings from './views/settings'
import SetAvatar from './views/setavatar'
import NotFound from './views/notfound'

import metadata from './data/meta.json'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home meta={metadata.home} />} />
          <Route path="/login" element={<Login meta={metadata.login} />} />
          <Route
            path="/register"
            element={<Register meta={metadata.register} />}
          />
          <Route
            path="/profile"
            element={<Profile meta={metadata.profile} />}
          />
          <Route
            path="/settings"
            element={<Settings meta={metadata.settings} />}
          />
          <Route
            path="/setavatar"
            element={<SetAvatar meta={metadata.setavatar} />}
          />
          <Route path="*" element={<NotFound meta={metadata.notfound} />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
