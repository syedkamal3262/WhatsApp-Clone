import React,{createContext,useContext, useReducer} from 'react'

const StateContext = createContext();

// const [state, dispatch] = useReducer(reducer,initialState)  

export const StateProvider = ({children,initialstate,reducer}) => {
    console.log(initialstate)
    return (
        <StateContext.Provider value={useReducer(reducer,initialstate)}>
                {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);
