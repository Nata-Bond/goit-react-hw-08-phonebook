import React from 'react'
import s from './userMenu.module.css'
import authSelectors from '../../redux/auth/authSelectors'
import authOperations from '../../redux/auth/authOperations'
import {connect} from 'react-redux'
import avatar from './avatar.png'

const UserMenu = ({avatar, name, onLogout}) => {
    return (
        <div className={s.userMenu}>
<img src={avatar} alt={name} width="28" className={s.avatar}/>
<span className={s.name}>Welcome, {name}</span>
<button type="button" onClick={onLogout}>Logout</button>
        </div>
    );
}



const mapStateToProps = (state) => 
({

       name: authSelectors.getUsername(state),
       avatar: avatar,

})

const mapDispatchToProps = {
onLogout: authOperations.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

