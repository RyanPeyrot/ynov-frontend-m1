import styles from './index.module.scss'
import React from 'react';
import image from "../../../public/image-test.webp";

const Index = ({place}) => {
    return (
        <div className={styles.card__main}>
            <div className={styles.card__img}><img src={image.src}/></div>
            <div className={styles.card__content}>
                <div className={styles.content__title}>{place.title}, {place.address.city}</div>
                <div className={styles.content__type}>{place.type}</div>
                <div className={styles.content__capacity}>{place.capacity} pers.</div>
                <div className={styles.content__price}><span>{place.pricing.perDay + "€"}</span> par nuit</div>
            </div>
        </div>
    );
};

export default Index;