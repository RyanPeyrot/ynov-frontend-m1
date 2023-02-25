import styles from './index.module.scss'
import React, {useContext} from 'react';
import heart from "../../../public/heart.png"
import WishlistContext from "../../context/WishlistContext";

const Index = ({place}) => {
    const { addPlaceToWishlist } = useContext(WishlistContext);

    return (
        <div className={styles.card__main}>
            <div className={styles.card__thumbnail}>
                <button className={styles.btn__wishlist} onClick={
                    () => {
                        addPlaceToWishlist(place);
                    }
                }><img src={heart.src}/></button>
                <img className={styles.thumbnail__img} src={place.image[0]}/>
            </div>
            <div className={styles.card__content}>
                <div className={styles.content__metadata}>
                    <div className={styles.content__title}>{place.title}, {place.address.city}</div>
                    <div className={styles.content__type}>{place.type.title}</div>
                    <div className={styles.content__capacity}>{place.capacity} pers.</div>
                    <div className={styles.content__price}><span>{place.pricing.perDay + "€"}</span> par nuit</div>
                </div>
                <div className={styles.content__rate}>
                    <span>4,99</span>
                </div>
            </div>
        </div>
    );
};

export default Index;