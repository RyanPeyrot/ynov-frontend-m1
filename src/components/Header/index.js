import React, {useContext, useEffect, useState} from 'react';
import Link from "next/link"
import styles from "./index.module.scss"
import AirBnBLogo from "/public/airbnb-logo.svg";
import hamburgerMenu from "/public/menu.png";
import profilLogo from "/public/profile-user.png";
import WishlistContext from "../../context/WishlistContext";
import {useRouter} from "next/router";
import HeaderModal from "../HeaderModal";
import UserContext from "../../context/UserContext";
const Index = () => {
    const { user } = useContext(UserContext);
    const router = useRouter();
    let isLogged = user != null;

    const [showMenu, displayModalMenu] = useState(false);

    useEffect(() => {
        displayModalMenu(false);
        isLogged = user != null;
    }, [router.asPath]);
    function handleModal(){
        if(showMenu){
            displayModalMenu(false)
        }else{
            displayModalMenu(true)
        }
    }


    return (
        <header className={styles.header__main}>
            {
                showMenu &&
                <div onClick={handleModal} className={styles.overlay}></div>
            }
            <Link href="/">
                <div className={styles.header__logo}>
                    <img src={AirBnBLogo.src}/>
                </div>
            </Link>
            <div className={styles.header__menu}>
                <button className={styles.modal__button} onClick={handleModal}>
                    <img className={styles.img__menu} src={hamburgerMenu.src}/>
                    <img className={styles.img__profil} src={profilLogo.src}/>
                </button>
                {
                    showMenu &&
                    <HeaderModal isLogged={isLogged}></HeaderModal>
                }
            </div>
        </header>
    );
};

export default Index;