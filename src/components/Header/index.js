import React, {useContext} from 'react';
import Link from "next/link"
import styles from "./index.module.scss"
import logo from "/public/airbnb-logo.svg"
import WishlistContext from "../../context/WishlistContext";
const Index = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <header className={styles.header__main}>
            <Link href="/">
                <div className={styles.header__logo}>
                    <img src={logo.src}/>
                </div>
            </Link>
            <div className={styles.header__menu}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href="/register">Register</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/login">Login</Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="/wishlist">
                            {
                                wishlist != null ? (wishlist.length + " Favoris") : ("Aucun favoris")
                            }

                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Index;