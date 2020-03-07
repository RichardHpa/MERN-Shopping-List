import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar.js';
import ShoppingList from './components/ShoppingList.js';
import ItemModal from './components/ItemModal.js';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

    componentDidMount(){
        store.dispatch(loadUser());
    }

    render(){
        return(
            <Provider store={store}>
                <div className="App">
                    <AppNavBar />
                    <Container>
                        <ItemModal />
                        <ShoppingList />
                    </Container>
                </div>
            </Provider>
        )
    }
}

export default App;
