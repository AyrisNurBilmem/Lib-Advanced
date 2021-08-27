import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Private from "./components/routing/Private"
import PrivateScreen from "./components/screens/PrivateScreen"
import LoginScreen from "./components/screens/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"
import HomePage from "./components/screens/HomePage"
import CheckoutBooks from "./components/screens/CheckoutBooks"
import CheckDeadlines from "./components/screens/CheckDeadlines"
import History from "./components/screens/History"
import ViewBooks from "./components/screens/ViewBooks"
import EachBook from "./components/screens/Tools/books/EachBook"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Private exact path="/" component={PrivateScreen} />
          <Private exact path="/home" component={HomePage}/>
          <Private path ="/home/:id" component = {EachBook}/>
          <Private exact path="/viewbooks" component={ViewBooks}/>
          <Private exact path="/checkoutbooks" component={CheckoutBooks}/>
          <Private exact path="/checkdeadlines" component={CheckDeadlines}/>
          <Private exact path="/history" component={History}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
          <Route exact path="/resetpassword/:resetToken" component={ResetPasswordScreen}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
