import React from 'react';
import Sidebar from "../components/Sidebar";

const AdminLayout = ({children}) => {
    return (
        <>
            <Sidebar/>
            <main>
                {children}
            </main>
        </>
    );
};

export default AdminLayout;