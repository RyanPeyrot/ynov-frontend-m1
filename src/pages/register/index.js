import React, {useState} from 'react';
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import TitlePage from "../../components/TitlePage";
import axios from "axios";

const baseUrl = "http://localhost:4000/api/v1/user/auth"

const Index = () => {

    const [userForm, setUserForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password :""
    });

    const handleInput = (e) => {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    }

    function createPost() {
        axios
            .post(baseUrl, {...userForm})
            .then((res) => {
                console.log(res)
                console.log(res.data);
            });
    }

    return (
        <div className="registerPage">
            <TitlePage title="Register"></TitlePage>
            <div style={{display:"flex"}}>
            <div className="register-form">
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
                <FormButton text="Valider" fonction={createPost}></FormButton>
            </div>
            <img src="/img.jpeg"/>
            </div>
        </div>
    );
};

export default Index;