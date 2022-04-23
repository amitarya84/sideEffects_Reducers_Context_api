import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Context/auth-context';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader isAuthenticated={ctx.isLoggedIn} onLogout={ctx.logoutHandler} />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.loginHandler} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.logoutHandler} />}
      </main>
    </>
  );
}

export default App;
