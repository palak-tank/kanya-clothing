import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter, Redirect, Route, Link } from "react-router-dom";
import Checkout from "../../component.pages/checkout/checkout.component";
import CartItem from "../cart-item/cart-item.component";
import "./card-dropdown.style.scss";

const goTo = () => {
  alert("clicked");
  // this.props.history.push("/checkout");
};

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
);

const mapStateToProops = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProops)(CartDropdown));
