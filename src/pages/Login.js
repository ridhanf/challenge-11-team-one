import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import Login from '../components/auth/login'

export default class signIn extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Login />
        <FooterComponent />
      </div>
    );
  }
}
