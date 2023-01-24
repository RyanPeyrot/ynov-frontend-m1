import styles from "./index.module.scss"
import React from 'react';
import PlaceCard from "../PlaceCard";

const Index = ({places}) => {
    return (
        <div className={styles.grid__container}>
            <div className={styles.grid__wrapper}>
                {
                    places && places.map((place) => (
                        <PlaceCard key={place._id} place={place}></PlaceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Index;