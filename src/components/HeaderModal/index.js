import React, {useContext, useEffect, useState} from 'react';
import styles from "../HeaderModal/index.module.scss";
import Link from "next/link";
import UserContext from "../../context/UserContext";

const Index = ({isLogged}) => {
    const {disconnect} = useContext(UserContext);

    return (
        <div>
            { isLogged ? (
                <div className={styles.modal__menu}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <Link href="/profil">Profil</Link>
                        </li>
                        <li className={`${styles.nav__item} ${styles.divider}`}></li>
                        <li onClick={disconnect} className={styles.nav__item}>
                            <Link href="/">Deconnexion</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className={styles.modal__menu}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <Link href="/register">Register</Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Index;