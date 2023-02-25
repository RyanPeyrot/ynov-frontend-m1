import styles from './index.module.scss'
import search from '/public/search.png'
import React, {useContext, useEffect, useState} from 'react';
import placeContext from "../../context/PlaceContext";

function Index(props) {
    const {updateSearch,resetSearch} = useContext(placeContext)
    const [searchFilter,setSearchFilter] = useState("");
    function updateCross(value) {
        setSearchFilter(value);
        if(value !== ""){
            document.getElementById("deleteContent").style.visibility = "visible"
        } else {
            document.getElementById("deleteContent").style.visibility = "hidden"
        }
    }

    useEffect(() => {
        document.getElementById("deleteContent").addEventListener('click',() => {
            document.getElementById("content").value = "";
            document.getElementById("deleteContent").style.visibility = "hidden";
            updateCross("");
            resetSearch();
        })
    },[])

    function updateSearchFilter(){
        event.preventDefault();
        updateSearch(searchFilter);
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={updateSearchFilter} className={styles.searchBar} >
                <input id="content" onChange={(e) => updateCross(e.target.value)} placeholder="Search place by title or description" type="text"/>
                <button type={"button"} id="deleteContent" className={styles.deleteContentBtn} >X</button>
                <button type={"submit"} className={styles.searchBtn}><img src={search.src}/></button>
            </form>
        </div>
    );
}

export default Index;