import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import ContactForm from "./components/contactForm/ContactForm";
import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import LoginPage from "./pages/login/LoginPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import AppBar from "./components/AppBar";

export default class App extends Component {
  state = {  }
  render() {
    return (
      <div>

        <AppBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/register" component={RegistrationPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/contacts" component={ContactsPage}/>
        </Switch>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactList />



    </div>
    );
  }
}
