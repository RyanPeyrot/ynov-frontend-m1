import React from 'react';
import Link from "next/link"
import styles from "./index.module.scss"
import logo from "/public/logo.png"
const Index = () => {
    return (
        <header className={styles.header__main}>
            <div className={styles.header__logo}>
                <img src={logo.src}/>
            </div>
            <div className={styles.header__menu}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/register">Register</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Index;