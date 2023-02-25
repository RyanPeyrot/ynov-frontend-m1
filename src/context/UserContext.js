import {createContext, useEffect, useState} from "react";
import userService from "../service/user.service";
import {router} from "next/router";
import UserService from "../service/user.service";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState();

    useEffect(() => {
        if(localStorage.getItem('token') != null ){
            userService.getMe(localStorage.getItem('token'))
                .then( res => {
                    setUser(res)
                })
        } else {
            setUser(null)
        }
    },[])

    const disconnect = () => {
        setUser(null);
        localStorage.removeItem('token');
        router.push("/");
    }

    const connect = (token) => {
        localStorage.setItem('token',token);
        UserService.getMe(localStorage.getItem('token'))
            .then(res => {
                if(res.auth == false){
                    router.push("/login");
                }else {
                    setUser(res);
                }
            })
        console.log(user);
        router.push("/profil");
    }

    const context = {
        connect,
        disconnect,
        user
    }

    return(
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
};