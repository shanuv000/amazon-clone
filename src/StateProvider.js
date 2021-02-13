import React, {createContext, useContext, useReducer} from "react";
// Prepares The Data Layer
export const StateContext = createContext();

// Wrap Our app and Provide the data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);