import {createContext, useEffect, useState} from "react";
import PlaceService from "../service/place.service";

const PlaceContext = createContext();

export default PlaceContext;

export const PlaceContextProvider = ({children}) => {
    const [places,setPlaces] = useState([]);
    const [displayPlaces,setDisplayPlaces] = useState([]);
    const [filter,setFilter] = useState({
        maxPrice:"",
        minPrice:"",
        capacity:"all",
        placeType:[],
    });
    const [search,setSearch] = useState("");

    useEffect(() => {
        PlaceService.getAllPlaces(localStorage.getItem('token'))
            .then( res => {
                setPlaces([...res])
                setDisplayPlaces([...res])
            })
    },[])

    useEffect(() => {
        let newDisplayPlaces = [...places]
        for (let idx = 0; idx < newDisplayPlaces.length ; idx++) {
            if(search != null && search !== ""){
                if(!newDisplayPlaces[idx].title.trim().toLowerCase().includes(search)
                    || !newDisplayPlaces[idx].description.trim().toLowerCase().includes(search)){
                    newDisplayPlaces.splice(idx,1);
                    idx--;
                    continue;
                }
            }

            if(filter.minPrice != null && filter.maxPrice != null){
                if(newDisplayPlaces[idx].pricing.perDay < filter.minPrice  || newDisplayPlaces[idx].pricing.perDay > filter.maxPrice){
                    newDisplayPlaces.splice(idx,1);
                    idx--;
                    continue;
                }
            }

            if(filter.capacity != null || filter.capacity !== 'all'){
                if(newDisplayPlaces[idx].capacity < filter.capacity){
                    newDisplayPlaces.splice(idx,1);
                    idx--;
                    continue;
                }
            }

            if(filter.placeType != null && filter.placeType.length > 0){
                if(!filter.placeType.includes(newDisplayPlaces[idx].type.title)){
                    newDisplayPlaces.splice(idx,1);
                    idx--;
                }
            }
        }

        setDisplayPlaces([...newDisplayPlaces])
    },[filter,search])

    const updateFilter = (filter) => {
        setFilter(filter);
    }
    
    const updateSearch = (search) => {
        setSearch(search.trim().toLowerCase());
    }

    const resetFilter = () => {
        const filter = {
            maxPrice:null,
            minPrice:null,
            capacity:null,
            placeType:null,
        }
        setFilter(filter);
    }
    const resetSearch = () => {
        setSearch("");
    }


    const context = {
        displayPlaces,
        updateFilter,
        updateSearch,
        resetFilter,
        resetSearch
    }

    return(
        <PlaceContext.Provider value={context}>
            {children}
        </PlaceContext.Provider>
    )
};