import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './views/home/index'
import Login from './views/login'
import Register from './views/register'
import Profile from './views/profile'
import Settings from './views/settings'
import SetAvatar from './views/setavatar'
import NotFound from './views/notfound'
import Tmp from './views/tmp'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/setavatar" element={<SetAvatar />} />
          <Route path="/tmp" element={<Tmp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
