
import React from 'react';

import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';

const Home = () => <h1><Link to="/about">Click Me</Link></h1>
const About = () => <h1>About Us</h1>

const ReactRoute = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={Home} />
      <Route path='/about' element={About} />
    </Routes>
  </Router>
)

export default ReactRoute;