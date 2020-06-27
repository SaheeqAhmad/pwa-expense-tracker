//  const { createContext } = require("react")
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//Create Initial State
const initialState = {
    transactions: [
        //{ id: 1, description: "Income 1", transactionAmount: 1000 }
    ]
}

// Creat Global Context 
export const GlobalContext = createContext(initialState);

// Create a provide for Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction

            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}