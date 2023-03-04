import React from 'react';
import TitlePage from "../../components/TitlePage";
import styles from "./index.module.scss";
import accept from "../../../public/accept.png"
import decline from "../../../public/declin.png"


const Index = () => {

    return (
        <div>
            <TitlePage title="Mes reservations"></TitlePage>
            <div className={styles.wrapper}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1>En tant qu'hote</h1>
                <table className={`${styles.table} ${styles.table__host}`}>
                    <thead>
                    <tr>
                        <th>Annonce</th>
                        <th>invité</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Number of night(s)</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><img src={accept.src}/><img src={decline.src}/></th>
                    </tr>
                    </tbody>
                </table>

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1>En tant qu'invité</h1>
                <table className={`${styles.table} ${styles.table__guest}`}>
                    <thead>
                    <tr>
                        <th>Annonce</th>
                        <th>Hote</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Number of night(s)</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
