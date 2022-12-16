import React, {useState} from 'react';
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import TitlePage from "../../components/TitlePage";

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

    return (
        <div>
            <TitlePage title="Login"></TitlePage>
            <form className="login-form">
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
                <FormButton text="Valider"></FormButton>
            </form>
        </div>
    );
};

export default Index;