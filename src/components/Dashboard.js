import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // For rendering child routes

function Dashboard() {
    const loginSuccess = false;

    return (
        <>
            {loginSuccess && (
                <div>
                    <Navbar />
                    <Outlet />
                    <div>Dashboard</div>
                </div>
            )}
        </>
    );
}

export default Dashboard;
