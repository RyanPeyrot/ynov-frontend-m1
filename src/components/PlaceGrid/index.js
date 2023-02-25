import styles from "./index.module.scss"
import React, {useContext} from 'react';
import PlaceCard from "../PlaceCard";
import PlaceContext from "../../context/PlaceContext";

const Index = () => {
    const {displayPlaces} = useContext(PlaceContext);
    return (
        <div className={styles.grid__container}>
            <div className={styles.grid__wrapper}>
                {
                    displayPlaces.length > 0 && displayPlaces.map(place => (
                        <PlaceCard key={place._id} place={place}></PlaceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Index;