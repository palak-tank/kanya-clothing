import React from "react";
import "./App.css";
import HomePage from "./component.pages/homepage/homepage.component";
import ShopPage from "./component.pages/shop/shop.component";
import { Route } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const Topic = () => (
  <div>
    <h1> Topic page</h1>
  </div>
);
const TopicDetails = () => (
  <div>
    <h1> Topic Details page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
    </div>
  );
}

export default App;
