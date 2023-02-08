import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from "../../store/auth-context";
import {useContext} from "react";

const Navigation = () => {
    const ctx = useContext(AuthContext);
    return (
        // <AuthContext.Consumer>
        //     {(ctx) => {
        //         return (
        <nav className={classes.nav}>
            {ctx.isLoggedIn && (
                <ul>
                    <li>
                        <a href="/">Users</a>
                    </li>
                    <li>
                        <a href="/">Admin</a>
                    </li>
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                </ul>
            )}
        </nav>
        // )
        // }}
        // </AuthContext.Consumer>
    );
};

export default Navigation;
