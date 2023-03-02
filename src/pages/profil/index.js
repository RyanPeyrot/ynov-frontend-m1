import React, {useContext, useEffect, useState} from "react";
import TitlePage from "../../components/TitlePage";
import UserField from "../../components/UserField";
import styles from "./index.module.scss"
import UserService from "../../service/user.service";
import {useRouter} from "next/router";
import Modal from "../../components/ProfilModal";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import userService from "../../service/user.service";
import WithAuth from "../../HOC/WithAuth";
import userContext from "../../context/UserContext";

const Index = () => {
    const {user} = useContext(userContext)
    const router = useRouter();
    const [loggedUser, setLoggedUser] = useState();
    const [userForm, setUserForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password :"",
        type:""
    });

    const [modal, setModal] = useState({
        show : false
    })

    useEffect(() => {
        setUserForm(user);
    }, [])

    function handleModal() {
        if(modal.show){
            setModal({show : false});
            document.getElementById("profil-main").classList.remove("blur")
            document.getElementsByTagName("header")[0].classList.remove("blur")
        } else {
            setModal({show : true});
            document.getElementById("profil-main").classList.add("blur")
            document.getElementsByTagName("header")[0].classList.add("blur")
        }
    }

    const handleInput = (e) => {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    }

    const addType = (e) => {
        if(e.target.checked){
            if(!userForm.type.includes("OWNER")){
                userForm.type.push(e.target.value);
            }
        } else {
            if(userForm.type.includes("OWNER")){
                const index = userForm.type.indexOf(e.target.value);
                userForm.type.splice(index,1)
            }
        }

    }

    function submitPost(e) {
        e.preventDefault();
        userService.update(localStorage.getItem('token'),userForm)
            .then( res => {
                router.push('/profil');
            })
            .catch(err=>console.log(err));
        handleModal();
    }

    return(
        <div>
            <div id="profil-main" className="profil__main">
                <TitlePage title="Profil"></TitlePage>
                <div className={styles.field__wrapper}>
                    <UserField name="Nom" content={user.lastName}></UserField>
                    <UserField name="Prenom" content={user.firstName}></UserField>
                    <UserField name="Email" content={user.email}></UserField>
                    <UserField name="Mot de passe" content={user.password}></UserField>
                    <UserField name="Types" content={user.type}></UserField>
                    <button className={`btn btn__blue ${styles.field__btn} `} onClick={handleModal}>Modifier son profil</button>
                </div>
            </div>
            <Modal show={modal.show} modalTitle={"Modifier profil"} handleModal={handleModal}>
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
                    <div>
                        <FormInput type="checkbox"
                                   titleLabel="Loueur"
                                   inputName="type"
                                   inputValue="OWNER"
                                   inputOnChange={(e) => {
                                       addType(e);
                                   }}>
                        </FormInput>
                    </div>
                    <FormButton handleClick={submitPost} btnClass="btn btn__form btn__blue" text="Valider"></FormButton>
                </form>
            </Modal>
        </div>
    )
}
export default WithAuth(Index);