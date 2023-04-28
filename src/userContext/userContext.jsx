import React, { createContext, useState } from 'react';
import CONSTANTS from '../constants';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const initialState = {
        user_name: "",
        password: "",
        success: false,
        message: ""
    }
    const [userObj, setUserObj] = useState(initialState);
    const login = (userObj) => {
        fetch(CONSTANTS.ENDPOINT.LOGIN, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: { "Content-Type": "application/json" }
        })
            .then((resp) => resp.json())
            .then((response) => {
                setUserObj(response)
            }).catch((ex) => {
                const errorObj = {
                    user_name: "",
                    password: "",
                    success: false,
                    message: ex
                }
                setUserObj(errorObj);
            })
    }
    return (
        <UserContext.Provider value={{ userObj, login }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;