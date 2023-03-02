import React, {useEffect, useState} from 'react';
import styles from './index.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import UserService from "../../service/user.service";

const Index = () => {
    const router = useRouter();
    const [user,setUser] = useState(null);

    useEffect(()=>{
        UserService.getMe(localStorage.getItem('token'))
            .then(res => {
                if(res.auth === false){
                    router.push("/login");
                }else {
                 setUser(res);
                }
            });
    },[])

    return ( user != null &&
        <nav className={styles.sidebar__main}>
            <h1 className={styles.sidebar__title}>{user.firstName.toUpperCase()} {user.lastName.charAt(0).toUpperCase()+ user.lastName.slice(1)}</h1>
            <div className={styles.sidebar__menu}>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link href="/admin/bookings">Bookings</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link href="/admin/users">Users</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Index;