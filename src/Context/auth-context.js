import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   const loginHandler = () => {
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };


const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  if(localStorage.getItem('isLoggedin') === '1'){
    setIsLoggedIn(true)
  }
}, []);


const loginHandler = (email, password) => {
  // We should of course check email and password
  // But it's just a dummy/ demo anyways

  localStorage.setItem('isLoggedin', '1');
  setIsLoggedIn(true);
};

const logoutHandler = () => {
  localStorage.removeItem('isLoggedin');
  setIsLoggedIn(false);
};






  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;