import React, {useContext, useEffect, useState} from 'react';
import styles from "../HeaderModal/index.module.scss";
import Link from "next/link";
import UserContext from "../../context/UserContext";

const Index = ({isLogged}) => {
    const {disconnect,user} = useContext(UserContext);

    return (
        <div>
            { isLogged ? (
                <div className={styles.modal__menu}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <Link href="/profil">Mon profil</Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/">Mes reservations</Link>
                        </li>
                            { user.type.length >0 && user.type.includes("OWNER")

                                (<li className={styles.nav__item}>
                                    <Link href="/">Mes annonces</Link>
                                </li>)
                            }
                        { user.isAdmin ? (
                            <li className={styles.nav__item}>
                                <Link href="/admin">Panel administrateur</Link>
                            </li>
                        ) : null }
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