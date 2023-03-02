import React from 'react';
import Sidebar from "../components/Sidebar";

const AdminLayout = ({children}) => {
    return (
        <>
            <Sidebar/>
            <main style={{"padding-left" : "20%"}}>
                {children}
            </main>
        </>
    );
};

export default AdminLayout;