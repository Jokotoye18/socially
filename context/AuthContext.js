import React, {createContext, useReducer} from 'react';
import {AuthReducer} from '../reducers/AuthReducer'

const initialState = {
    isAuth: false,
    user: null
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState)

  return <AuthContext.Provider value={{
      state,
      dispatch
  }}>{children}</AuthContext.Provider>;
};
