import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import { createContext, useState } from 'react';
// export const AuthContext = createContext();

// Import Components
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setAuth = () => {
    setIsLoggedIn((prev) => !prev);
  }

  const value = {
    isLoggedIn: isLoggedIn,
    setAuth: setAuth,
  }

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/contacts">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/contacts" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;