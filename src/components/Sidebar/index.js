import React from 'react';
import styles from './index.module.scss'
import Link from "next/link";

const Index = () => {
    return (
        <nav className={styles.sidebar__main}>
            <h1 className={styles.sidebar__title}>Bonjour !</h1>
            <div className={styles.sidebar__menu}>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link href="/login">Login</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link href="/register">register</Link>
                    </li>
                    <li className={styles.navbar__bottom}>
                        <Link href="/profil">Profil</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Index;