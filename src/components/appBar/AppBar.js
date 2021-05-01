import React from 'react'
import Navigation from "../navigation/Navigation"
import UserMenu from "../userMenu/UserMenu"
import AuthNav from "../authNav/AuthNav"
import s from './appBar.module.css'
import {connect} from 'react-redux'
import authSelectors from '../../redux/auth/authSelectors'




const AppBar = ({isAuthenticated}) => {
    return (
        <header className={s.header}>
<Navigation/>
{isAuthenticated ? <UserMenu/> : <AuthNav/>}
            </header>
    );
}

const mapStateToProps = (state) => ({
isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(AppBar);