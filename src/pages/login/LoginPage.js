import React, {Component} from 'react'
import s from "./../registration/form.module.css"
import {connect} from 'react-redux'
import authOperations from "./../../redux/auth/authOperations"

class LoginPage extends Component {
    state = { 
        email: '',
        password: '',
     }

     handleInputChange = (e)=> {
         this.setState({[e.target.name]: e.target.value})
     }

     handleSubmit = (e)=> {
         e.preventDefault();
         this.props.onLogIn(this.state);
         this.reset();
         
     }

     reset = ()=> {
         this.setState({
            email: '',
        password: '',   
         })
     }

    render() {
        return (
           <div>
<form className={s.form} onSubmit={this.handleSubmit}>
    <label className={s.label}>
        Email
        <input type='email' className={s.input} name='email' value={this.state.email} onChange={this.handleInputChange}/>
    </label>
    <label className={s.label}>
        Password
        <input type='password' className={s.input} name='password' value={this.state.password} onChange={this.handleInputChange}/>
    </label>
    <button className={s.button} type="submit" >Enter</button>
</form>
           </div> 
        );
    }
}

const mapDispatchToProps = {
    onLogIn: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginPage)