import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import { Container } from "reactstrap"
import { Provider } from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="content">
            <AppNavbar />
            <Container>
              <ItemModal />
              <ShoppingList />
            </Container>
          </div>
          <AppFooter />
        </div>
      </Provider>
    );
  }
}

export default App;