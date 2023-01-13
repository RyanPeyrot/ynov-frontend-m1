import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    );
};

export default MainLayout;