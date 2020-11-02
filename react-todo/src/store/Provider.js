import React, {createContext, useContext} from "react";
import useThunkReducer from 'react-hook-thunk-reducer';

const StateContext = createContext();


export const StateProvider = (props) => {

    const {reducer, initialValue, children} = props;

    return (
        <StateContext.Provider value={useThunkReducer(reducer, initialValue)}>
            {children}
        </StateContext.Provider>

    )
}

export function useStore() {
    return useContext(StateContext);
}
