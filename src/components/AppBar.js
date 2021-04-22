import React from 'react'
import Navigation from "./Navigation"
import UserMenu from "./UserMenu"
import AuthNav from "./AuthNav"




const AppBar = () => {
    return (
        <header>
<Navigation/>
{/* {false? <UserMenu/> : <AuthNav/>} */}
            </header>
    );
}

export default AppBar;