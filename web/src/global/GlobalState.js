import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'

export const GlobalState = (props) => {
    const [ list, setList ] = useState([])

    const states = { list }
    const setters = { setList }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}