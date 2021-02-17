import './App.css';
import Header from "./Header";
// import Footer from "./Footer";
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import React, {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./payment";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51ILCApD1AMyF695Iyf43h3Ye5WPiyacYnKRrvjWihM6VL3S7Uv9tYUgiQjELqDfx0qm3UW7ps9rSo2oEeXBWVhzY00eTlMdg8G");

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        //Will ONly run if the app component loads
        auth.onAuthStateChanged((authUser) => {
            console.log('The user is >>> ', authUser);

            if (authUser) {
                //The user Just Logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // The user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });
    }, []);
    return (
        //Bem
        <Router>

            <div className="app">

                <Switch>
                    {/*<Route path='/orders'>*/}
                    {/*    <Header/>*/}

                    {/*</Route>*/}
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/checkout'>
                        <Header/>
                        <Checkout/>
                    </Route>

                    <Route path='/payment'>
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>

                    <Route path='/'>
                        <Header/>
                        <Home/>
                        {/*<Footer/>*/}

                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
