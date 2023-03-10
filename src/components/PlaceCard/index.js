import styles from './index.module.scss'
import React, {useContext} from 'react';
import heart from "../../../public/heart.png"
import WishlistContext from "../../context/WishlistContext";
import Link from "next/link";

const Index = ({place}) => {
    const { addPlaceToWishlist } = useContext(WishlistContext);


    return (
        <div className={styles.card__main}>
            <Link href={"/places/"+place._id}>
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
                    {
                        place.rate != null
                            ? (<span>{place.rate}</span>)
                            : (<span>0,00</span>)
                    }
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Index;