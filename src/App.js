import React from "react";
import "./App.css";
import HomePage from "./component.pages/homepage/homepage.component";
import ShopPage from "./component.pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./component.pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from "../src/firebase/firebase.utils"


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      currentState: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentState: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentState}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
