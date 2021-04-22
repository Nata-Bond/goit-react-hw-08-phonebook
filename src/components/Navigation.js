
import React from 'react';
import {Navlink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navlink to='/' exact> 
                Home
            </Navlink>
            <Navlink to='/contacts' exact>Contacts</Navlink>
        </div>
    );
}

export default Navigation;



