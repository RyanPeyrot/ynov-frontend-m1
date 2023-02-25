import React from 'react';
import SearchBar from "../SearchBar";
import MoreFilter from "../MoreFilter";
import styles from "./index.module.scss"

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <SearchBar></SearchBar>
            <MoreFilter></MoreFilter>
        </div>
    );
};

export default Index;