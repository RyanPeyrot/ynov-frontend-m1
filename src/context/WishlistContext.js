import {createContext, useEffect, useState} from 'react';
import wishlistContext from "./WishlistContext";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const WishlistContext = createContext()

export default WishlistContext;
export const WishlistContextProvider = ({children}) => {
    const [wishlist,setWishlist] = useState([]);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('wishlist')) != null ){
            setWishlist(JSON.parse(localStorage.getItem('wishlist')));
        } else {
            setWishlist([])
        }
    },[])

    const removePlaceFromWishlist = (place) => {
        //...
        //setPlaces(...item)
    }

    const addPlaceToWishlist = (place) => {

    }

    const deleteWishlist = () => {
        setWishlist([]);
    }

    const context = {
        removePlaceFromWishlist,
        addPlaceToWishlist,
        deleteWishlist,
        wishlist
    }

    return(
        <WishlistContext.Provider value={context}>
            {children}
        </WishlistContext.Provider>
    )
};