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

    function submitPost(e) {
        e.preventDefault();
        fetch(baseUrl,{
            method : "POST",
            headers: {
                'Content-type':"application/json"
            },
            body:JSON.stringify(userForm)
        }).then(res => {
            res.json()
        .then(user=>console.log(user))})
            .catch(err=>console.log(err));
    }

    return (
        <div className="registerPage">
            <TitlePage title="Register"></TitlePage>
            <div style={{display:"flex"}}>
            <form className="register-form">
                <div style={{display:"flex"}}>
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
                <FormButton text="S'inscrire" handleClick={submitPost}></FormButton>
            </form>
            <img src="/dino.svg"/>
            </div>
        </div>
    );
};

export default Index;