import React from 'react';
import { createContext, useReducer, Dispatch } from 'react';
import { reducer, InitialState, ItemDetails } from './reducers';
import { Action } from './actions';

interface AppProviderProps {
  children: React.ReactNode;
}

const initialState = { items: [] as ItemDetails[], itemCount: 0 };

const AppContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
