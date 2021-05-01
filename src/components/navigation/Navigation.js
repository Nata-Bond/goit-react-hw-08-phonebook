
import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './navigation.module.css';
import {connect} from 'react-redux'
import authSelectors from '../../redux/auth/authSelectors'

const Navigation = ({isAuthenticated}) => {
    return (
        <div>
            <NavLink to='/' exact className={s.link} activeClassName={s.activeLink}> 
                Home
            </NavLink>
            { isAuthenticated && <NavLink
            to='/contacts' exact className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>}
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect (mapStateToProps)(Navigation);



