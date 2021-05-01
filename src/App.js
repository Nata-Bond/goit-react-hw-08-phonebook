import React, {Component, Suspense, lazy} from "react";
import {Switch} from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
// import RegistrationPage from "./pages/registration/RegistrationPage";
// import LoginPage from "./pages/login/LoginPage";
// import ContactsPage from "./pages/contacts/ContactsPage";
import AppBar from "./components/appBar/AppBar";
import Container from './components/container/Container'
import authOperations from './redux/auth/authOperations'
import { connect } from "react-redux";
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'


const HomePage = lazy(()=> import("./pages/home/HomePage"))
const RegistrationPage = lazy(()=>import ("./pages/registration/RegistrationPage"))
const LoginPage = lazy(()=> import("./pages/login/LoginPage"))
const ContactsPage = lazy(()=> import("./pages/contacts/ContactsPage"))

class App extends Component {
  
componentDidMount() {
  this.props.onGetCurrentUser();
}

  render() {
    return (

<Container>
        <AppBar/>
        <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage}/>
          <PublicRoute path="/register" component={RegistrationPage} redirectTo="/contacts" restricted/>
          <PublicRoute path="/login" component={LoginPage} redirectTo="/contacts" restricted/>
          <PrivateRoute path="/contacts" component={ContactsPage} redirectTo="/login"/>
        </Switch>
        </Suspense>


      </Container>

    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)