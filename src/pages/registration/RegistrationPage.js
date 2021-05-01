import React, {Component} from 'react'
import s from './form.module.css'
import {connect} from 'react-redux'
import authOperations from './../../redux/auth/authOperations'




class RegistrationPage extends Component {
    state = { 
        name: '',
        email: '',
        password: '',
     }

     handleInputChange = (e)=> {
         this.setState({[e.target.name]: e.target.value})
     }

     handleSubmit = (e)=> {
         e.preventDefault();
         this.props.onRegister(this.state);
         console.log(this.state);
         
         this.reset();
         
     }

     reset = ()=> {
         this.setState({
             name: '',
            email: '',
        password: '',   
         })
     }

    render() {
        return (
           <div>
<form onSubmit={this.handleSubmit} className={s.form} autoComplete="off">
<label className={s.label}>
        Name
        <input type='text' className={s.input} name='name' value={this.state.name} onChange={this.handleInputChange}/>
    </label>
    <label className={s.label}>
        Email
        <input type='email' className={s.input}  name='email' value={this.state.email} onChange={this.handleInputChange}/>
    </label>
    <label className={s.label}>
        Password
        <input type='password' className={s.input}  name='password' value={this.state.password} onChange={this.handleInputChange}/>
    </label>
    <button type="submit" className={s.button}>Enter</button>
</form>
           </div> 
        );
    }
}

const mapDispatchToProps = {onRegister: authOperations.register,}

export default connect (null, mapDispatchToProps)(RegistrationPage);