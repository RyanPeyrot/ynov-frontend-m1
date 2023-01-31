import React, {useContext, useState} from 'react';
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import TitlePage from "../../components/TitlePage";
import AuthService from "../../service/auth.service"
import styles from "./index.module.scss"
import UserContext from "../../context/UserContext";

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASEURL}/v1/auth/register`

const Index = () => {
    const {connect} = useContext(UserContext)

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
        AuthService.register(userForm)
            .then( res => {
                if(!res.auth){

                }
                connect(res.token);
            })
            .catch(err=>console.log(err));
    }

    return (
        <div className={styles.register__main}>
            <TitlePage title="Register"></TitlePage>
            <form className={styles.register__form}>
                <div className={styles.register__naming}>
                <FormInput type="text"
                           titleLabel="Firstname"
                           inputName="firstName"
                           inputValue={userForm.firstName}
                           inputOnChange={(e) => {
                               handleInput(e)
                           }}>
                </FormInput>
                <FormInput type="text"
                           titleLabel="Lastname"
                           inputName="lastName"
                           inputValue={userForm.lastName}
                           inputOnChange={(e) => {
                               handleInput(e)
                           }}>
                </FormInput>
                </div>
                <FormInput type="text"
                           titleLabel="Email"
                           inputName="email"
                           inputValue={userForm.email}
                           inputOnChange={(e) => {
                               handleInput(e)
                           }}>
                </FormInput>
                <FormInput type="text"
                           titleLabel="Password"
                           inputName="password"
                           inputValue={userForm.password}
                           inputOnChange={(e) => {
                               handleInput(e)
                           }}>
                </FormInput>
                <FormButton btnClass="btn btn__form btn__blue" text="S'inscrire" handleClick={submitPost}></FormButton>
            </form>
        </div>
    );
};

export default Index;