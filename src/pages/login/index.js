import React, {useContext, useState} from 'react';
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import TitlePage from "../../components/TitlePage";
import AuthService from "../../service/auth.service"
import {useRouter} from "next/router";
import Alert from "../../components/Alert";
import styles from "./index.module.scss"
import UserContext from "../../context/UserContext";

const Index = () => {
    const {connect} = useContext(UserContext)
    let route = useRouter();
    const [errorAuth, setErrorAuth] = useState({
        display : false,
        state: "",
        errorMessage : ""
    })
    const [userForm, setUserForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password :""
    });

    const handleInput = (e) => {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    }


    function submitPost(e) {
        e.preventDefault();
        AuthService.login(userForm)
            .then( res => {
                if(!res.auth){
                    console.log(res.message);
                    setErrorAuth({display: true, state : "active", errorMessage: res.message})
                } else {
                    connect(res.token)
                }
            })
            .catch(err=>console.log(err));
    }

    return (
        <div className={styles.login__main}>
            <TitlePage title="Login"></TitlePage>
            {errorAuth.display &&
                (<Alert alertState={errorAuth.state} alertType="danger" alertContent={errorAuth.errorMessage}></Alert>)
            }
            <form className="login-form">
                <FormInput type="text"
                           titleLabel="Email"
                           inputName="email"
                           inputValue={userForm.email}
                           inputOnChange={(e) => {
                               handleInput(e)
                           }}>
                </FormInput>
                <FormInput type="password"
                           titleLabel="Password"
                           inputName="password"
                           inputValue={userForm.password}
                           inputOnChange={(e) => {
                               handleInput(e)
                           }}>
                </FormInput>
                <FormButton btnClass="btn btn__form btn__blue" text="Valider" handleClick={submitPost}></FormButton>
            </form>
        </div>
    );
};

export default Index;